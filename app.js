//this basic example is in Node.js ES5
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = require('http');
const net = require('net');
const url = require('url');
const request = require('request');

const APIKEY = 'b8cc8ef6-efe5-43e7-8131-0c78497c46a5';

/*
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

/*
var options = {
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=614&limit=5&convert=USD',
    headers: {
        'X-CMC_PRO_API_KEY': 'b8cc8ef6-efe5-43e7-8131-0c78497c46a5'
        //'Accept': 'application/json'
    }
};
*/

// --- Binance API ---

var options = {
    url: 'https://api.binance.com/api/v1/depth',
    headers: {
        'symbol': 'LTCBTC',
        'limit': 5
    }
};

   
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        //console.log("ay");
        console.log(info);
    }

    else {
        console.log(body);
    }
    //console.log(response.statusCode);
}
   
request(options, callback);
/*
const CMC_PRO_API_KEY = 'b8cc8ef6-efe5-43e7-8131-0c78497c46a5'
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function handler() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response);
      console.log('memes');
    }
  
    else {
        console.log(xhr.readystate, xhr.status);
    }
};
xhr.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=0&limit=200&convert=USD,EUR');
//console.log(xhr.readystate, xhr.status);
xhr.setRequestHeader(CMC_PRO_API_KEY, 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c');
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
//xhr.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=0&limit=200&convert=USD,EUR');

xhr.send();
*/
/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', 'http://example.com', true);
xhr.send(null);
*/