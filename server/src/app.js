import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Importing routes
import home from './routes/homeRouter.js'
import registerUser from './routes/registerUserRouter.js'

// Initializations
const app = express()
const port = process.env.PORT || 3000

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/', home)
app.use('/register', registerUser)

app.listen(port, () => {
  console.log(`Server runningon  http://localhost:${port}`)
})
