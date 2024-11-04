const http = require('http');
const soap = require('soap');
const fs = require('fs');

// Define a simple SOAP service with a sayHello method
const myService = {
    MyService: {
        MyPort: {
            sayHello: (args) => {
                return { greeting: `Hello, ${args.name}!` };
            }
        }
    }
};

// Load the WSDL file
const wsdl = fs.readFileSync('service.wsdl', 'utf8');

// Create an HTTP server and attach the SOAP service to it
const server = http.createServer(() => {});
soap.listen(server, '/wsdl', myService, wsdl);

server.listen(8000, () => {
    console.log('SOAP API server listening at http://localhost:8000/wsdl');
});
