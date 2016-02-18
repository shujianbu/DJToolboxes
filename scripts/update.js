var fs        = require('fs'),
  path      = require('path'),
  csv       = require('fast-csv'),
  GitHubApi = require('github'),
  github    = new GitHubApi({
    version: '3.0.0',
    protocol: 'https',
    host: 'api.github.com',
    timeout: 5000
  });

github.authenticate({
    type: 'oauth',
    token: ''
});

var out = [],
  ws  = fs.createWriteStream(__dirname + '/../app/data.csv');

ws.on('finish', function() {
  console.log('Done updating.');
});

var init = function () {
  var file   = __dirname + '/list.csv',
    list   = [],
    stream = fs.createReadStream(file),
    input  = csv.fromStream(stream, {headers: true})
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
      console.log(entry);
      out.push(entry);
    }
    ind++;
    update(list, ind);
  });

};

var save = function() {
  csv.write(out, {headers: true}).pipe(ws);
};

init();
