var express = require('express');
var router = express.Router();
const schemaone = require("./users")
const schematwo = require("./collection2")

router.get('/', async (req, res) => {
  try {
    const data = await schemaone.find();
    const data2 = await schematwo.find()
    res.json([ data, data2])
  } catch (error) {
    console.log(error)
  }
})


router.post("/", async (req, res) => {
  try {
    const data = await schemaone.create(req.body)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
