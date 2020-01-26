var express = require('express');
var router = express.Router();
const productService  = require('../../api-services/apiService');

router.get("/getplaces", async function(req, res){  
    let productServiceObj = new productService(req, res);
    let locations = productServiceObj.InitiateApiCall().then(function(response) {
      // console.log("Success!");
      // console.log(response.length)
      res.json(response);
    }, function(error) {
      // console.error("Failed!", error);
      res.json(response)
    })
})

module.exports = router;
