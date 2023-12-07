const {MongoClient} = require('mongodb')

let dbConnection
let uri='mongodb+srv://nishantsinha1197:test1234@cluster0.yfhmf9k.mongodb.net/?retryWrites=true&w=majority' //password :test1234
module.exports={
    connectToDb: (cb) => {    //callback
        // MongoClient.connect('mongodb://localhost:27017/bookstore')
        MongoClient.connect(uri)
        .then((client)=>{
           dbConnection= client.db()
           return cb()
        })
        .catch(err=>{
            console.log(err);
            return cb(err)
        })
    },
    getDb: ()=> dbConnection
}