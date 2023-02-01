'use strict';

const Hapi = require('@hapi/hapi');

const init = async() => {

    await mongoose.connect('mongodb+srv://beratbeser:jyZjtA9uG93mTET6@cluster0.5si7e4a.mongodb.net/test');
    
    const server = Hapi.Server({
        host: 'localhost' ,
        port: 1234
    });

    server.route({
        method: 'GET' ,
        path: '/' ,
        handler: (request, h) => {
            return "<h1>Hello World!</h1>";
        }
    });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();