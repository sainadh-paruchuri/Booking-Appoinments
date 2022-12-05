const express=require('express');
const path=require('path')
const bodyParser = require('body-parser');

const sequelize=require('./util/database');

const cors=require('cors')

const app=express();


app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminRoutes);


app.use(cors());


sequelize.sync()
.then((result) => {
    app.listen(4000)
}).catch((err) => {
    console.log(err);
});

