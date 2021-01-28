const http = require('http');

const server = http.createServer((req,res)=>{
    let numero1to10 = aleatorio(1,10,0);
    let numero0to9999 = aleatorio(0,9999.99,2);
    let respuesta = {
        id: numero1to10,
        title: `Producto ${numero1to10}`,
        price: numero0to9999,
        thumbnail : `Foto ${numero1to10}`
    }
    res.end(JSON.stringify(respuesta))
})
const aleatorio = (min, max,decimales)=>{
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimales || -1) + '})?');
    let num = Math.random() * (max - min) + min
    return num.toString().match(re)[0];
}

const PORT = process.env.PORT||3000;

server.listen(PORT,()=>{
    console.log(`Servidor esta disponible en: ${PORT}`);
})