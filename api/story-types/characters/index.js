const express = require('express')
const router = express.Router()

const storyTypeCharacters = {
    characters: [
      {
        name: 'Tree',
        choices: [
         { id: 'tree', name: 'Tree', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1269763283828.560b0355beaef.jpg' },
        ]
      },
      {
        name: 'Squirrel',
        choices: [
         { id: 'squirrel', name: 'Squirrel', image: 'https://farm4.staticflickr.com/3677/33206228991_5575b5ba11_b.jpg' },
        ]
      },
    ]
}

router.get('/:key/characters', (req, res) => res.json(storyTypeCharacters) )

module.exports = router


