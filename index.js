const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('hola mundo')
})

const PORT = process.env.PORT||3000;

server.listen(PORT,()=>{
    console.log(`Servidor esta disponible en: ${PORT}`);
})