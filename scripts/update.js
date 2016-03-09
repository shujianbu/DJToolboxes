var fs        = require('fs')
  , path      = require('path')
  , csv       = require('fast-csv')
  , GitHubApi = require('github')
  , ini       = require('ini');

var inFile     = path.join(__dirname, '/list.csv')
  , outFile    = path.join(__dirname, '/../app/data/data.csv')
  , configFile = path.join(__dirname, '/../.gitconfig.local');

var github, ws;
var outdata = [];

var init = function () {

  var config = ini.parse(fs.readFileSync(configFile, 'utf-8'));
  var token = config.git.token;

  github = new GitHubApi({
    version: '3.0.0',
    protocol: 'https',
    host: 'api.github.com',
    timeout: 5000
  });
  github.authenticate({
    type: 'oauth',
    token: token
  });

  ws = fs.createWriteStream(outFile);
  ws.on('finish', function() {
    console.log('Done updating.');
  });

  var stream = fs.createReadStream(inFile);
  var list = [];
  csv.fromStream(stream, {headers: true})
    .on('data', function(data) {
      list.push(data);
    })
    .on('end', function() {
      update(list, 0);
    });
};

var update = function(list, ind) {
  if(ind === list.length) {
    save();
    return;
  }

  github.repos.get({
    user: list[ind].user,
    repo: list[ind].repo
  }, function(err, res) {
    if(err) {
      console.error(err);
    }
    else {
      var entry = {};
      entry.user = list[ind].user;
      entry.repo = list[ind].repo;
      entry.html_url = res.html_url;
      entry.notes = list[ind].notes;
      entry.description = res.description;
      entry.watch = res.subscribers_count;
      entry.star = res.watchers;
      entry.forks = res.forks;
      entry.language = res.language;
      outdata.push(entry);
      console.log(entry);
    }
    ind++;
    update(list, ind);
  });

};

var save = function() {
  csv.write(outdata, {headers: true}).pipe(ws);
};

init();
