const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=115fe4b648c58a2beb2e6aeb5e485b33&query=' + latitude + ',' + longitude + '&units=m'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect',undefined)
        }
        else if(body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + " it is currently " + body.current.temperature + "degrees out.it feels like " + body.current.feelslike + " degrees out ")
        }
    })
}

module.exports = forecast