//------------------------------------------------------------------------------------------------------
//NOTA
//Este ejercicio fue cambiando a lo largo del tutorial. Por eso hay muchas secciones.
//------------------------------------------------------------------------------------------------------


/*
const express = require('express')
const path = require('path')
*/

//------------------------------------------------------------------------------------------------------
//PARTE 1
//para esta parte se agregó el modulo 'express'
//------------------------------------------------------------------------------------------------------
/*
//create de express aplication
const app = express()


//request: "app.com"
app.get('', (req, res) => {
    res.send('<h1>hello express!</h1>')
})

//requtes: "app.com/help"
app.get('/help', (req, res) => {
    res.send([{
        name: 'Felipe Forero',
        age: '40'
    },{
        name: 'Luisa',
        age: '40'
    }])
})

//request: app.com/about
app.get('/about', (req, res) => {
    res.send('<table border="1" width="100%"><tr><td>About Page!</td></tr></table>')
})

//request: app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'bogota'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
*/


//------------------------------------------------------------------------------------------------------
//PARTE 2
//para esta parte se agregó el modulo 'path'
//------------------------------------------------------------------------------------------------------
/*
//demostracion de como funciona el modulo 'path'
//console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname, '../public'))


//create de express aplication
const app = express()


//La funcion 'use()' se usa para customizar el servidor.
//Con la funcion 'use()' se le puede decir al servidor web que exponga un directorio. Ej: 'public'.
//La funcion 'express.static()' toma el path que queremos que el servidor exponga.
//static() siginifica que los recursos son estaticos y que no cambian.
const publicDirectoryPath = path.join(__dirname, '../public') 
app.use(express.static(publicDirectoryPath))



//NOTA: debido a la customizacion anterior con 'app.use' para que tenga en cuenta el directorio "public",
//      ya no es necesario tener un "app.get()" para vacio, para "/about", o para "/help". 
//      Cuando se hace un request, el modulo de path va y busca el recurso en la carpeta publica que se configuró
//      en busca de un archivo html que haga match.


// http://localhost:3000/            <-- linea 1 
// http://localhost:3000/index.htl   <-- linea 2
//                                     Ambas lineas funcionan poque en el mundo de los servidores web dejar la raiz vacia, 
//                                     o colocar 'index.html' es lo mismo.
//                                     Esto sucede así, en caso de que no se especifique algo en la url como en la linea 1.


//request: app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'bogota'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
*/


//------------------------------------------------------------------------------------------------------
//PARTE 3
//Para esta parte se agregó el modulo 'hbs', que siginifca "handlebars", el cual permite utilizar
//plantillas html en las respuestas. Es decir, se puede tener una misma plantilla para diferentes
//resultados. Estas plantillas estan en la carpeta "views".
//
//El modulo "hbs" permite usar la funcion "set" integrada a app. En otras palabras,
//es como un plugin para el servidor express.
//------------------------------------------------------------------------------------------------------
/*
//create de express aplication
const app = express()

//handlebars set up in express. Los parametros son esos.
app.set('view engine', 'hbs')

//directorio public expuesto en web server
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


//request: "app.com"
//NOTA: con el modulo hbs se volvio a agregar este segmento de codigo, porque el index de public
//      se renombro y es como si ya no existiera. Ahora hay que sacarlo de la carpeta views.
//NOTA: se usa la funcion "render" que hace referencia a la extencion "hbs". En el nombre del
//      archivo 'index' (primer argumento) no hay necesidad de usar la extension.
//      En el segundo argumento se pasan los valores a reemplazar en al plantilla. 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Felipe Forero'
    })     
})

//request: app.com/contact
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Info',
        name: 'Felipe Forero',
        number: '311-5516699'
    })     
})


//request: app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'bogota'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
*/

//------------------------------------------------------------------------------------------------------
//PARTE 4
//Se renombro el directorio "view" por "Templates".
//Se agrego el directorio de templates al path para hacerlo accesible tambien
//------------------------------------------------------------------------------------------------------
/*
//create de express aplication
const app = express()


//directorio public y templates expuestos para que express(web server) los use.
//"__dirname" es el directorio donde este archivo "app.js" esta.
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

//setup handlebars engine
app.set('view engine', 'hbs')
//setup views(templates) locations
app.set('views', viewPath)

//setup  static directory to serve
app.use(express.static(publicDirectoryPath))



//request: "app.com"
//NOTA: con el modulo hbs se volvio a agregar este segmento de codigo, porque el index de public
//      se renombro y es como si ya no existiera. Ahora hay que sacarlo de la carpeta views.
//NOTA: se usa la funcion "render" que hace referencia a la extencion "hbs". En el nombre del
//      archivo 'index' (primer argumento) no hay necesidad de usar la extension.
//      En el segundo argumento se pasan los valores a reemplazar en al plantilla. 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Felipe Forero'
    })     
})

//request: app.com/contact
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Info',
        name: 'Felipe Forero',
        number: '311-5516699'
    })     
})


//request: app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'bogota'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
*/

//------------------------------------------------------------------------------------------------------
//PARTE 5
//Se va a usar la libreria hbs de handlebars mas a fondo para crear "parciales", que son secciones
//de codigo html que se pueden usar repetidamente en diferetes paginas donde siempre seran iguales.
//Ejemlo: encabezados, pies de pagina
//------------------------------------------------------------------------------------------------------
/*
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { response } = require('express')
const fs =  require('fs')

//create de express aplication
const app = express()


//directorio public y templates expuestos para que express(web server) los use.
//"__dirname" es el directorio donde este archivo "app.js" esta.
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine
app.set('view engine', 'hbs')
//setup views(templates) locations
app.set('views', viewPath)
//Setup partials
hbs.registerPartials(partialsPath)

//setup  static directory to serve
app.use(express.static(publicDirectoryPath))



//request: "app"
//NOTA: con el modulo hbs se volvio a agregar este segmento de codigo, porque el index de public
//      se renombro y es como si ya no existiera. Ahora hay que sacarlo de la carpeta views.
//NOTA: se usa la funcion "render" que hace referencia a la extencion "hbs". En el nombre del
//      archivo 'index' (primer argumento) no hay necesidad de usar la extension.
//      En el segundo argumento se pasan los valores a reemplazar en al plantilla. 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/contact
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Info',
        name: 'Felipe Forero Guzmán',
        number: '311-5516699'
    })     
})

//request: app/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/contact
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'bogota'
    })
})

//404 response, para un ruta especifica
app.get('/help/*', (req, res) => {
    res.render('404_PageNotFound', {
        title: '404',
        errorMessage: 'El artículo HELP que está buscando no existe',
        name: 'Felipe Forero Guzmán'
    })
})

//404 response, para todo lo que no exista
app.get('*', (req, res) => {
    res.render('404_PageNotFound', {
        title: '404',
        errorMessage: 'La página que está buscando no existe',
        name: 'Felipe Forero Guzmán'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
*/

//------------------------------------------------------------------------------------------------------
//PARTE 6
//Pars este punto ya empezamos la integracion con los servicios usados en el ejemplo de weather-app
//------------------------------------------------------------------------------------------------------
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//create de express aplication
const app = express()


//directorio public y templates expuestos para que express(web server) los use.
//"__dirname" es el directorio donde este archivo "app.js" esta.
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine
app.set('view engine', 'hbs')
//setup views(templates) locations
app.set('views', viewPath)
//Setup partials
hbs.registerPartials(partialsPath)

//setup  static directory to serve
app.use(express.static(publicDirectoryPath))



//request: "app"
//NOTA: con el modulo hbs se volvio a agregar este segmento de codigo, porque el index de public
//      se renombro y es como si ya no existiera. Ahora hay que sacarlo de la carpeta views.
//NOTA: se usa la funcion "render" que hace referencia a la extencion "hbs". En el nombre del
//      archivo 'index' (primer argumento) no hay necesidad de usar la extension.
//      En el segundo argumento se pasan los valores a reemplazar en al plantilla. 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/contact
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Info',
        name: 'Felipe Forero Guzmán',
        number: '311-5516699'
    })     
})

//request: app/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/contact
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Felipe Forero Guzmán'
    })     
})

//request: app/weather
app.get('/weather', (req, res) => {
    
    if(!req.query.address){
        console.log('Error: provide an address term')
        return res.send({
            error: 'provide an address term'
        })
    }

    //geolocation
    geocode(req.query.address, (error, data1) => {
        //console.log(error, data1)
        if(error){
            console.log('Error: '+error)
            return res.send({
                error: error
            })
        }
        
        //forcast
        forecast(data1.longitude, data1.latitude, (error, data2) => {
            //console.log(error, data2)
            if(error){
                console.log('Error: '+error)
                return res.send({
                    error: error
                })
            }
            
            console.log('La temperatura en \''+data1.location+'\' es de '+data2.temperature+' grados, pero se siente como si fueran '+data2.feelslike+' grados!')
            console.log('El clima está '+data2.description)

            return res.send({
                forecast: `La temperatura en \'${data1.location}\' es de ${data2.temperature} grados, pero se siente como si fueran ${data2.feelslike} grados!\nEl clima está ${data2.description}`,
                location: data1.location,
                address: req.query.address,
                temperature: data2.temperature,
                feelslike: data2.feelslike
            })
        })    
    })
})

//productos
app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'provide a search term'
        })
    }

    
    res.send({
        products: []
    })
})

//404 response, para un ruta especifica
app.get('/help/*', (req, res) => {
    res.render('404_PageNotFound', {
        title: '404',
        errorMessage: 'El artículo HELP que está buscando no existe',
        name: 'Felipe Forero Guzmán'
    })
})

//404 response, para todo lo que no exista
app.get('*', (req, res) => {
    res.render('404_PageNotFound', {
        title: '404',
        errorMessage: 'La página que está buscando no existe',
        name: 'Felipe Forero Guzmán'
    })
})


//starts the express server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})