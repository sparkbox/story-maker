const express = require('express')
const router = express.Router()

const storyTypes = {
  types: [
   { name: 'Adventure', key: 'adventure' }
  ]  
}

router.get('/story-types', (req, res) => res.json(storyTypes) )

module.exports = router

