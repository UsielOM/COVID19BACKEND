const { SerialPort } = require('serialport')

module.exports = function() {
    const port = new SerialPort({ path: 'COM11', baudRate: 230400 })

    port.write('main screen turn on', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    })

    port.on('data', function(data) {
        let temp = parseInt(data, 10) + "°C";
        console.log("Tu temperatura es: " + temp);
    })

    // Open errors will be emitted as an error event
    port.on('error', function(err) {
        console.log('Error: ', err.message)
    })




}