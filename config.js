module.exports = {
  "db": "mongodb://getir2:Kklmfux0r,@ds011248.mongolab.com:11248",
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
  "urlPrefix": "",
  "auth": {
    "usersDBConnection": "mongodb://getir2:Kklmfux0r,@ds011248.mongolab.com:11248",
    "usersCollection": "User",
    "tokenDBConnection": "mongodb://getir2:Kklmfux0r,@ds011248.mongolab.com:11248",
    "tokensCollectionName": "Token",
    "universalAuthToken": "a3d38c88a4f5f21df86b810ff5235788",
    "tokenExpirationTimeHours": 8
}
}
