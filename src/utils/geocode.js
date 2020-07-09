const request = require('request')
const geocode =(address,callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2F6aWQxMjMiLCJhIjoiY2thdzM1YzBlM3JjbjJzcDZ1Y2d2Nm9kNSJ9.5hbI8i5yfWrfbylF8vNzOg&limit=1'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to location sevices',undefined)
        }
        else if(body.features.length===0){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name

            })
        }
    })
}

module.exports=geocode