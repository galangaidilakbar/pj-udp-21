import { createSocket } from 'dgram'
const server = createSocket("udp4")

server.on('error', (err) => {
    console.log(`Server error:\n${err.stack}`)
    server.close()
})

server.on('message', (msg, rinfo) => {
    console.log(`Kita dapet pesan:`)
    console.log(`"${msg}"\t\tdari ${rinfo.address}:${rinfo.port}`)
})

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(8080)
