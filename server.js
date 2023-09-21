const app = require('./app')
const config = require('./app/config')

const port = config.app.port

app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`)
})