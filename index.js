var request = require('request');
var utils = require('./utils');

var url = process.argv[2];
var groupByUniqueValue = utils.containsArg('-g');

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var emails = body.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

        //Delete the repeated emails
        if(groupByUniqueValue) {
            emails = utils.groupByName(emails);
        }
        try {
            console.log(emails.join('\n')); // Show all the emails found
        } catch (e) {
            console.log('No emails found :(')
        }
    } else {
        console.log('There was a problem connecting to the url requested');
    }
});