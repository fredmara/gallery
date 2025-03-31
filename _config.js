var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://moringa:moringa1@gallery.wc344.mongodb.net/gallery?retryWrites=true&w=majority',
    development: 'mongodb+srv://moringa:moringa1@gallery.wc344.mongodb.net/gallery?retryWrites=true&w=majority',
    test: 'mongodb+srv://moringa:moringa1@gallery.wc344.mongodb.net/gallery?retryWrites=true&w=majority',
}
module.exports = config;
