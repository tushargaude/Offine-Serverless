const Pool=require('pg').Pool

const pool=new Pool({
    user : "postgres",
    password : "tushar",
    database : "Notification",
    host : "localhost",
    port : 5432
});

module.exports=pool;