const app = require('../src/app');
const port = normalizaPort(process.env.PORT || '3000');
const mongoose = require('mongoose');

const urlMongo = "mongodb://FluxWeather:Itajai30455705@ds054999.mlab.com:54999/fluxweather";

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}

app.listen(port, function () {
    console.log(`Servidor rodando normalmente na porta ${port}`);
    return port;
})

mongoose.connect(urlMongo, {useNewUrlParser: true})
    .then(() => {
        console.log("Conectado com sucesso ao mongo DB");
    });




