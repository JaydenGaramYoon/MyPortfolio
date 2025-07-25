import config from './server/config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true, 
    //useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
app.get("/", (req, res) => {
    res.json({ message: "Welcome to My Portfolio application." });
});
app.listen(config.port, (err) => { //for local deployment
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

// app.listen(process.env.PORT || 3000, (err) => { //for production deployment
//     if (err) {
//         console.log(err)
//     }
//     console.info('Server started on port %s.', process.env.PORT || 3000)
// })
