// simple http server

const http = require('http')

const server = http.createServer((request,response) => {
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('This is the homepage')
    }

    else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('This is the about')
    }
})

const port = process.env.PORT || 3000

server.listen(port,()=>console.log(`listening ${port}`))