console.log('The bot is starting')

var Twit = require('twit')

var config = require('./config')
var T = new Twit(config)
var params = { q: 'china since:2011-07-11', count: 10 }

T.get('search/tweets', 
        params, 
        gotData)
    

function gotData(err, data, response) {
    console.log(data)
}