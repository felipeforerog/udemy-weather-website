const request = require('postman-request')


//funcion para obtener coordernadas de una ubicacion
const geocode = (address, callback) => {
    const access_token = 'pk.eyJ1IjoiZmVsaXBlbWFwYm94IiwiYSI6ImNrZ25vcXlzMTA0NG8zM3BjemM0dmg1ZHcifQ.tuKFdyTFVbwm_RUBKN3hSw'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=region&access_token='+access_token

    request({url: url, json: true},
        (error, response) => {
            if(error){
                const errorMesage = 'No ha sido posible conectarse al servicio de localización (Mapbox).'
                const data = undefined 
                callback(errorMesage, data)
            }else if(response.body.features === undefined){
                const errorMesage = 'Se debe proveer una direccion de busqueda.'
                const data = undefined
                callback(errorMesage, data)
            }else if(response.body.features.length === 0){
                const errorMesage = 'No fue posible encontrar la ubicación.'
                const data = undefined
                callback(errorMesage, data)
            }else{
                const errorMesage = undefined
                const data = {
                    longitude: response.body.features[0].center[0],
                    latitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                }
                callback(errorMesage, data)
            }
        }
    )
}


//export
module.exports = geocode