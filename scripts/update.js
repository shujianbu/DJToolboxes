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

var out  = [];

var init = function () {
	var file   = __dirname + '/data.csv',
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

	var entry = {};

	github.repos.get({
		user: list[ind].user,
		repo: list[ind].repo
	}, function(err, res) {
		if(err) {
			console.error(err);
		}
		else {
			entry.html_url = res.html_url;
			entry.description = res.description;
			entry.watch = res.subscribers_count;
			entry.star = res.watchers;
			entry.forks = res.forks;
			console.log(entry);
			out.push(entry);
			update(list, ++ind);
		}
	});

};

var save = function() {
	// TODO
	console.log('save');
};

init();