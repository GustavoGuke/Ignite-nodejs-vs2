import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.end('Nodejs')
})

server.listen(3333)