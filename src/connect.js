var mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`, {
    useNewUrlParser: true
});