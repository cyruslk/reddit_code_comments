const request = require('request');
const cheerio = require("cheerio");

request('https://www.reddit.com/r/ComedyCemetery/comments/9cf4lu/respect_wahmen/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
       console.log($.html('.s5kz2p-0'));   
   }
});
