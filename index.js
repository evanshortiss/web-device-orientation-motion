'use strict'

const port = 8080
const getIp = require('internal-ip').v4
const server = require('http-server').createServer()

getIp().then(addr => {
  server.listen(port, (e) => {
    if (e) {
      throw e
    }

    console.log(`app available at http://${addr}:${port}`)
  })
})

