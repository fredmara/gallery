var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://fowino:moringa1@moringa1.wi7j66y.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://fowino:moringa1@moringa1.wi7j66y.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://fowino:moringa1@moringa1.wi7j66y.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
