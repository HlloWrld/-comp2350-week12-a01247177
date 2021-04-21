const database = require("mongoose");
const is_heroku = process.env.IS_HEROKU || false;
const databaseName = "lab_example"

const herokuURI ="mongodb+srv://theMongoAdmin:Password123@cluster0.4ulcc.mongodb.net/lab_example?retryWrites=true&w=majority"
const localURI ="mongodb://localhost/lab_example?authSource=admin&retryWrites=true"

	if (is_heroku) {
	database.connect(herokuURI, {useNewUrlParser: true, useUnifiedTopology: true});
	}
	else {
	database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
	}


module.exports = database;
		

//mongodb+srv://theMongoAdmin:Password123@cluster0.6m56a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority