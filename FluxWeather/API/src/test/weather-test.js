const assert  = require('chai')
const request = require('request');
const weather = require('../controllers/weatherController')
const mongoose = require('mongoose');
var Weather = require('../models/WeatherModel')


/*it('API weather comunication', function(done) {
  request('https://api.hgbrasil.com/weather?key=82c6e4c3&city_name=newyork,ny' , function(error, response, body) {
      assert.expect(response.statusCode).to.equal(200);
      done();
  });
})*/

describe("Mongo Tests", () => {
  let error;
  it("Connect to mongo", (done) => {
    let urlMongo = "mongodb://FluxWeather:Itajai30455705@ds054999.mlab.com:54999/fluxweather";
    
    mongoose.connect(urlMongo, {useNewUrlParser: true})
      .then(err => { error = err });
    assert.expect(error).to.equal(undefined);
    done();
  });

  it("Save to MongoDb", (done) => {
      let saveTest;
      const teste = {
        body:{
            city: "Itajaí, SC",
            date: "19/05/2019",
            description: "teste"
        }
      }
      const weatherModel = new Weather(teste.body);
    
      weatherModel.save(err => {
        saveTest = err
      })

      assert.expect(saveTest).to.equal(undefined);
      done();
  });

  it("Find and delete from Mongo", (done) => {
    const weatherModel = new Weather();
    let max;
    let deleteTest;
    Weather.findOne({ seq : 1 }).where({'last_mod': 1}).sort('-last_mod').exec( function(err, doc) {
        if(!err)
          max = doc.last_mod;
    });

    weatherModel.remove({ seq: max }, err => {
      deleteTest = err;
    })

    assert.expect(deleteTest).to.equal(undefined);
    done();
  });
});
