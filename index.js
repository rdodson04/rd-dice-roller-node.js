const express = require('express')
app = express()

const cors = require("cors")

const port = process.env.PORT || 3000
 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))


app.get('/api/ping', (request, response) => {
	console.log('Calling "/api/ping"')
	response.type('text/plain')
	response.send('ping response')
})


app.get('/roll-dice', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1; 
  res.json({ result });
});


// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)