const serve = require('serve');

const PORT = process.env.PORT || 5000;

const server = serve(__dirname, {
    port: PORT,
    ignore: ['node_modules']
});