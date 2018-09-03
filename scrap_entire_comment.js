require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
const rp = require('request-promise');
const cheerio = require('cheerio');

var request = require('request');
var fs = require('fs');


const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

const streamOpts = {
    subreddit: 'all',
    results: 1
};

const comments = client.CommentStream(streamOpts);

comments.on('comment', (comment) => {
    request(comment.link_permalink, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        fs.writeFile('./comment.txt', body);
      }
    
    });
});
