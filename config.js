var config = {};

config.sunrise = {};
config.happycu = {};
config.parisfcu = {};
config.web = {};

config.sunrise.name = process.env.SUNRISE_NAME || 'Sunrise Bank';
config.sunrise.apikey = process.env.SUNRISE_API_KEY || 'AIzaSyAWwP5yH9Hke0FQkwEUujx-L8QelE27ZpY';
config.sunrise.latitude = process.env.SUNRISE_LATITUDE || '30.3534585';
config.sunrise.longitude = process.env.SUNRISE_LONGITUDE || '-97.7249686';
config.sunrise.locationtype = process.env.SUNRISE_LOCATION_TYPE || 'atm';
config.sunrise.language = process.env.SUNRISE_LANGUAGE || 'English';
config.sunrise.outputtype = process.env.SUNRISE_OUTPUT_TYPE || 'json';
config.sunrise.numberOfLocations = process.env.SUNRISE_NUMBER_OF_LOCATIONS || '200';

config.happycu.name = process.env.HAPPYCU_NAME || 'Happy Credit Union';
config.happycu.apikey = process.env.HAPPYCU_API_KEY || 'AIzaSyAYaNzyQoSDKW0FIUxhEgUEsmPic9XqtPU';
config.happycu.latitude = process.env.HAPPYCU_LATITUDE || '36.3494036';
config.happycu.longitude = process.env.HAPPYCU_LONGITUDE || '-82.2233843';
config.happycu.type = process.env.HAPPYCU_TYPE || 'bank';
config.happycu.language = process.env.HAPPYCU_LANGUAGE || 'Spanish';
config.happycu.responseOutput = process.env.HAPPYCU_RESPONSE_OUTPUT || 'json';
config.happycu.numberOfLocations = process.env.HAPPYCU_NUMBER_OF_LOCATIONS || '20';

config.parisfcu.name = process.env.PARISFCU_NAME || 'Paris FCU';
config.parisfcu.apikey = process.env.PARISFCU_API_KEY || 'AIzaSyAdAnwAfMAEDU3igUPKq_v8QrapgzyNHT4';
config.parisfcu.latitude = process.env.PARISFCU_LATITUDE || '36.3728287';
config.parisfcu.longitude = process.env.PARISFCU_LONGITUDE || '-82.3339605';
config.parisfcu.type = process.env.PARISFCU_TYPE || 'all';
config.parisfcu.language = process.env.PARISFCU_LANGUAGE || 'French';
config.parisfcu.responseOutput = process.env.PARISFCU_RESPONSE_OUTPUT || 'json';
config.parisfcu.numberOfLocations = process.env.PARISFCU_NUMBER_OF_LOCATIONS || '5';

config.web.port = process.env.WEB_PORT || 3000;

module.exports = config;
