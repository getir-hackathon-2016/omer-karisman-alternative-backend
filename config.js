var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });

module.exports = {
	"logger" : logger,
  "db": "mongodb://getir2:Kklmfux0r,@ds013838-a0.mlab.com:13838/getir-hackathon",
  "server": {
    "port": process.env.PORT || 3000,
    "address": "0.0.0.0"
  },
  "accessControl": {
    "allowOrigin": "*",
    "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
    "allowCredentials": true
  },
  "mongoOptions": {
    "serverOptions": {},
    "dbOptions": {
      "w": 1
    }
  },
  "humanReadableOutput": true,
  "collectionOutputType": "json",
  "urlPrefix": "",
  "auth": {
    "usersDBConnection": "mongodb://getir2:Kklmfux0r,@ds013838-a0.mlab.com:13838/getir-hackathon",
    "usersCollection": "User",
    "tokenDBConnection": "mongodb://getir2:Kklmfux0r,@ds013838-a0.mlab.com:13838/getir-hackathon",
    "tokensCollectionName": "Token",
    "universalAuthToken": "a3d38c88a4f5f21df86b810ff5235788",
    "tokenExpirationTimeHours": 8
	}
}
