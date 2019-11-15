const express = require('express')
const characters = require('./characters')
const router = express.Router()

const storyTypes = {
  types: [
   { name: 'Adventure', key: 'adventure' }
  ]  
}

router.get('/', (req, res) => res.json(storyTypes) )
router.use(characters);

module.exports = router

