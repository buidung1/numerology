//const {createConnection, query} = require('mysql');

// require(['mysql'], function(require){
//     var mysql = require('mysql');  
    
// })

var mysql = require('mysql');


// const {createConnection} = require('mysql');
const pool = mysql.createPool({
    host:"108.179.232.142",
    user:"anthangs_alexd",
    password:"YiosD&0k5$@74l0dTht",
    database: "anthangs_numerology"
})



pool.query('select * from num_meaning', (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})


// const app = express()

// //
// app.get('/selectdb', (req, res) =>{
//     let sql = 'select * from num_meaning'
//     pool.query(sql, err => {
//         if(err){
//             return console.log(err);
//         }
//         res.send('displayed')
//     })
// })

