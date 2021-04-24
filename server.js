

const express =require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRoute = require('./routes/index');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/my',{
    useNewUrlParser:true
});
const db = mongoose.connection
db.on('error',()=>console.error(error))
db.once('open',()=>console.log('database connected'))


//static files
app.use(express.static('public'));


//set engine templates
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')


app.use('/',indexRoute);
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('server is running on port 3000');
});