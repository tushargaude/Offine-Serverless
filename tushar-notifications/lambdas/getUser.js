exports.handler = async (event) => {
    
    const pool=require('./db.js')
    if (!event.body) {
        const Responses= {
            statusCode: 404,
            body: JSON.stringify(
                {
                  message: "Missing Data",
                 
                })
        };
        return Responses;
    }

    const body = JSON.parse(event.body)
    let notification_id=(body.notification_id);
    let version=parseInt(body.version);
    let userid=parseInt(body.userid);
    let notification_body=(body.notification_body);
    let notificationtime=(body.notificationtime);
    let lifecyclestate=(body.lifecyclestate);
    let token=(body.token);

    try{
        const userInserted = await pool.query('INSERT INTO "notification_database" ("notification_id","version","userid","notification_body","notificationtime","lifecyclestate","token") VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *', [notification_id,version,userid,notification_body,notificationtime,lifecyclestate,token]);
        const Responses= {
            statusCode: 400,
            body: JSON.stringify(
                {
                  message: "Inserting data into Database"
                })
        };
        return Responses;
    }
    catch{
        const Responses= {
            statusCode: 404,
            body: JSON.stringify(
                {
                  message: "Error in Inserting data into Database",
                })
        };
        return Responses;
    }
};