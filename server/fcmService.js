// Load modules

var fcm = require('node-fcm');

// Replace these with your own values.
var apiKey = "AAAA9ljuQ0Y:APA91bHhPYlRhNBazmHO7S8cdF_QN3woEVSG5L5qLUJEBgwF1F3vwW3GY5_uy2DuxmJILmge29AY7NI5BfFC-kbPfTO6RejbJ8P1BIjG0W8emHyB7vhsDwjqLZPfqIVdp03UNaEMG5FF";
var deviceID = "Device's Registration ID";

var service = new fcm.Sender(apiKey);
var message = new fcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');
message.addData('content-available', '1');

service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});
