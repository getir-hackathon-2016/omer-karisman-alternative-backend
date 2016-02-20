module.exports = {
  "db": "mongodb://getir:Kklmfux0r,@ds011248.mongolab.com:11248/getir-hackathon",
  "server": {
    "port": process.env.PORT || 3000,
    "address": "0.0.0.0"
  },
  "accessControl": {
    "allowOrigin": "*",
    "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
    "allowCredentials": false
  },
  "mongoOptions": {
    "serverOptions": {},
    "dbOptions": {
      "w": 1
    }
  },
  "humanReadableOutput": true,
  "collectionOutputType": "json",
  "urlPrefix": ""
}
