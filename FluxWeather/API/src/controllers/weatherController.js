var fetch = require('node-fetch');

exports.get =  async function(request, response){
    let city = request.params.city
    //const responseWeather = 
    //    await fetch(`https://api.hgbrasil.com/weather?key=82c6e4c3&city_name=${city}`)
    //const responseWeather = city
    //const json = await responseWeather.json();
    res.status(200).send(json);
}

exports.save = (req, res) => {
    res.status(200).send(`API respondendo POST`)
}