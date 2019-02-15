var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var forecastSchema  = new Schema({
    date: {type: Date, default: Date.now},
    location: String,
    weatherInfo: Object
}, { collection: 'forecasts'});

module.exports = mongoose.model('forecast', forecastSchema);