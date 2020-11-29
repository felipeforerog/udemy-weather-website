const request = require('postman-request')


//funcion para obtener el pronostico del clima para una ubicacion
const forecast = (longitude, latitude, callback) => {  
    const access_key = 'b5cc4309772bbf8e8940f0c9fb749615'
    const url = 'http://api.weatherstack.com/current?access_key='+access_key+'&query='+latitude+','+longitude

    request({url: url, json: true},
        (error, response) => {
            if(error){
                const error = 'No ha sido posible conectarse al servicio del clima (weatherstack).'
                const data = undefined
                callback(error, data)
            }else if(response.body.error){
                const error = 'No fue posible encontrar la ubicación.'
                const data = undefined
                callback(error, data)
            }else{
                const error = undefined
                const data = {
                    place: response.body.location.timezone_id,
                    temperature: response.body.current.temperature,
                    feelslike: response.body.current.feelslike,
                    description: response.body.current.weather_descriptions[0]
                }
                callback(error, data)
            }
        }
    )
}


//export
module.exports = forecast