const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 7500
const api = express.Router()
const v1 = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine','ejs')
app.set('views','view')
app.use(express.static('public'))

app.use('/api', api)
api.use('/v1', v1)


app.get('/', (req,res) => {
    res.render('landing-page.ejs')
})

app.get('/loggedin', (req,res) => {
    res.render('loggedin-page.ejs')
})

app.get('/play', (req,res) => {
    res.render('game-page.ejs')
})

app.get('/login', (req,res) => {
    res.render('login-page.ejs')
})

app.get('/register', (req,res) => {
    res.render('register-page.ejs')
})


v1.post('/register',(req,res) => {
    const {username, password} = req.body
    if(!username || !password){
        res.status(400).json({
            message:"please input username and password"
        })
    } else {
        const users = fs.readFileSync('data/user.json','utf-8')
        const parsedUsers = JSON.parse(users)
        const newUser = {
            "username": req.body.username,
            "password": req.body.password
        }
        const userFound = parsedUsers.find(item => item.username === newUser.username)
        if(userFound){
            res.status(400).json({
                message:"username is already taken"
            })
        } else {
            parsedUsers.push(newUser)
            fs.writeFileSync('data/user.json',JSON.stringify(parsedUsers,null,2), 'utf-8')
            res.redirect('/loggedin')
        }
    }
})

v1.get('/register',(req,res) => {
    const users = fs.readFileSync('data/user.json','utf-8')
    const parsedJSON = JSON.parse(users)
    res.status(200).json({
        parsedJSON
    })
})

v1.post('/login',(req,res) => {
    const {username, password} = req.body
    const users = fs.readFileSync('data/user.json','utf-8')
    const parsedUsers = JSON.parse(users)
    const newUser = {
        "username": req.body.username,
        "password": req.body.password
    }
    const userFound = parsedUsers.find(item => item.username === newUser.username)
    if(!userFound){
        message.push('user is not found')
    } else {
        if(userFound.password !== newUser.password){
            res.status(400).json({
                message:"password is incorrect"
            })
        } else {
            res.redirect('/loggedin')
        }
    }
})


app.listen(PORT, () => {
    console.log(`Server is connected to port: ${PORT}`)
})