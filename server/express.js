import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.js'
import contactRoutes from './routes/contact.routes.js'
import projectRoutes from './routes/projects.routes.js'
import qualificationRoutes from './routes/qualifications.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRoutes) // Mounting the contact routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', projectRoutes) // Mounting the project routes
app.use('/', qualificationRoutes) // Mounting the qualification routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use((err, req, res, next) => { // To handle auth-related errors thrown by express-jwt 
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})
export default app
