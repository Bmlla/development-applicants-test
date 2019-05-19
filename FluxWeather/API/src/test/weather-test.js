const assert  = require('chai')
const request = require('request');
const weather = require('../controllers/weatherController')
const mongoose = require('mongoose');


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
    assert.expect(weather.save().to.equal(200));
    done();
  });

  it("Delete from Mongo", (done) => {
    
    assert.expect(weather.delete().to.equal(200));
    done();
  });
});
