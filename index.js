// create server in 
// const http = require('http');

// http.createServer((req,res)=>{
//     res.write(`Hello from abishek `);
//     res.end();
// }).listen(8080);

const express = require('express');
const path = require('path');

const app = express();
const htmlPath = path.join(__dirname,'html');

// ################  set view engine  #####################
app.set('view engine','ejs');

// ######################   application middleware // #############################
// const reqFilter = (req, resp, next) =>{
//     if(!req.query.age){
//        resp.send("Please provide the age ");
//     }else{
//         next();
//     }
// }
// app.use(reqFilter);

// ################# make middleware ###################################
const userAuthentic = require('./app/http/middlewares/users_middleware');
const route = express.Router();

route.use(userAuthentic);

app.get('/',(_,resp)=>{
    resp.render('users/index');
});
app.get('/products',(_,resp)=>{
    var products =[
        {
            name:'jean Pant',
            color:'Black',
            category: 'male',
            size:'34',
        },
        {
            name:'jean Shirt',
            color:'White',
            category: 'male',
            size:'42',
        },
        {
            name:'Tshirt',
            color:'White',
            category: 'female',
            size:'42',
        }
    ]
    resp.render('users/products',{products});
});

// app.get('*',(req,res)=>{
//     res.send('Sorry this url is not found');
//     res.end();
// });
app.use('/',route);
app.listen(8080);