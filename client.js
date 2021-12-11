import { createSocket } from 'dgram'
import readline from 'readline'

const client = createSocket('udp4')

client.on('error', (err) => {
    console.log(`terdapat kesalahan: ${err}`)
    client.close()
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Tuliskan pesan: ', pesan => {
    client.send(Buffer.from(pesan.toString()), 8080, 'localhost')
    rl.close()
})