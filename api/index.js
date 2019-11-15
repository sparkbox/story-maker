const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const storyTypes = require('./story-types')

app.use(storyTypes);

app.listen(port, () => console.log(`Story maker api listening on port ${port}!`))
