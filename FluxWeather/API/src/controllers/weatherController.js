var fetch = require('node-fetch');
var Weather = require('../models/WeatherModel')

exports.get =  async function(request, response){
    let city = request.params.city
    //const responseWeather = 
    //    await fetch(`https://api.hgbrasil.com/weather?key=82c6e4c3&city_name=${city}`)
    //const responseWeather = city
    //const json = await responseWeather.json();
    res.status(200).send(json);
}

exports.save_weather = (req, res) => {
    const teste = {
        body:{
            city: "Itajaí, SC",
            date: "19/05/2019",
            description: "testeeeeeeeeeeeeeeee"
        }
    }
    const weatherModel = new Weather(teste.body);
    
    weatherModel.save(err => {
        if (err) return res.status(500).send(err);
        
        return res.status(200).send(newTodoObj);
    })
}