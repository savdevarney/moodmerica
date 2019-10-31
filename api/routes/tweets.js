const Twitter = require('twitter');
const express = require('express');
const router = express.Router();
const socketApi = require('../socketApi.js');

tweetsApi = {};

tweetsApi.socketConnection;
tweetsApi.twitterStream;

tweetsApi.startTwitterStream = () => {
    let twitter = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    console.log('Resuming for ' + 'JavaScript');
    twitter.stream('statuses/filter', { track: 'JavaScript' }, (stream) => {

        stream.on('data', (tweet) => {
            tweetsApi.sendTweet(tweet);
        });

        stream.on('error', (error) => {
            console.log(error);
        });

        tweetsApi.twitterStream = stream;
    });
};

tweetsApi.sendTweet = (tweet) => {
    tweetsApi.socketConnection.emit('tweets', {tweet: tweet});
};

module.exports = tweetsApi;