console.log('Se cargo data.js')

//------------------------------------------------------------------------------------------
//Este ejemplo era para ver como funcionaba la funcion fetch para hacer llamados a URLs.
//La funcion fetch() solo funciona del lado del cliente en la mayoria de navegadores
//modernos. No es una funcion que funcione del lado de nodejs.
//------------------------------------------------------------------------------------------
/*
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})
*/


//------------------------------------------------------------------------------------------
//Ejercicio hecho por mi.
//Hice la larga, cuadno debi coger la URL que ya teniamos en localhost.
//------------------------------------------------------------------------------------------
/*
//gocoding data
const address = 'Bogota'
const access_token = 'pk.eyJ1IjoiZmVsaXBlbWFwYm94IiwiYSI6ImNrZ25vcXlzMTA0NG8zM3BjemM0dmg1ZHcifQ.tuKFdyTFVbwm_RUBKN3hSw'
const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=region&access_token='+access_token

//gocoding call
fetch(url1).then((response) => {
    
    //gocoding respuesta OK
    response.json().then((data) => {
        //geocoding imprime respusta
        //console.log(data)

        //obtiene datos
        const longitude = data.features[0].center[0]
        const latitude = data.features[0].center[1]
        //console.log(longitude, latitude)

        //forecast data
        const access_key = 'b5cc4309772bbf8e8940f0c9fb749615'
        const url2 = 'http://api.weatherstack.com/current?access_key='+access_key+'&query='+latitude+','+longitude

        //forecast call
        fetch(url2).then((response) => {
            //forecast respuesta OK
            response.json().then((data) => {
                //forecast imprime respusta
                //console.log(data)

                //obtiene datos
                const place = data.location.timezone_id
                const temperature = data.current.temperature
                const feelslike = data.current.feelslike
                const description = data.current.weather_descriptions[0]
                console.log(place, temperature, feelslike, description)
            })
        })
    })
})
*/


//------------------------------------------------------------------------------------------
//Ejercicio del profe.
//Tomo la URL del localhost.
//------------------------------------------------------------------------------------------
/*
fetch('http://localhost:3000/weather?address=bogota').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
*/

//------------------------------------------------------------------------------------------
//Creadno un formulario en la vista y llamado el servicio de weather
//------------------------------------------------------------------------------------------

//El document viene siendo la pagina html(hbs) que carga este js
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

//El form tiene un boton que sera el submit, al cual se le agrega un EventListener
    //para este punto no se como el boton hace de submit. Si pongo otro boton no sabría diferenciarlos.
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()      //previene que la pagina se recargue despues de oprimir el boton

    //obtiene el valor del campo search
    const location = search.value
    forecastLocation(location)
    //console.log(location)
})

function forecastLocation(location){
    message1.textContent = ''
    message2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
                message1.textContent = data.error
            }else{
                console.log(data.location)
                console.log(data.forecast)
                message1.textContent = `${data.location}`
                message2.textContent = `${data.forecast}`
            }
        })
    })
}

