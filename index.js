require('dotenv').config()
const fs = require('fs')
const mineflayer = require('mineflayer')
const clientTokenFilename = '.clientToken'
const accessTokenFilename = '.accessToken'

let accessToken, clientToken

if (fs.existsSync(accessTokenFilename)) {
    console.log('using cached access token')
    accessToken = fs.readFileSync(accessTokenFilename).toString()
}

if (fs.existsSync(clientTokenFilename)) {
    console.log('using cached client token')
    clientToken = fs.readFileSync(clientTokenFilename).toString()
}

const options = {
    host: "localhost",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    logErrors: true,
    clientToken: clientToken,
    accessToken: accessToken,
}

let stateNum = 0;
const states = {
    QUEUE: ++stateNum,
    IDLE: ++stateNum,
    MINING: ++stateNum,
    FISHING: ++stateNum,
    WOODCUTTING: ++stateNum,
    STORING_ITEMS: ++stateNum,
}

const currentState = {
    rootState: true,
    tailState: this,
    state: states.QUEUE,
    subState: null
}

let bot
tryConnect();

function tryConnect() {
    console.log('trying to connect...')
    bot = mineflayer.createBot(options).on('error', (err) => {
        console.log(err)
        console.log('something went wrong')
        if (err.errno === -111) {
            setTimeout(tryConnect, 20000)
        }
    })

    bindEvents(bot)
}

function bindEvents(bot) {
    bot.once('login', () => {
        bot.chat('hello world!')
        console.log('joined')
        if (typeof bot.session != 'undefined') {
            updateTokens()
        }
        console.log(bot.inventory);
    })

    bot.on('kicked', (reason, loggedIn) => {
        console.log(`I was kick for ${reason}`)
        tryConnect();
    })

    bot.on('end', () => {
        //console.log(bot)
        console.log('now disconnected')
        if (typeof bot.session != 'undefined') {
            updateTokens()
        }
    })

    bot.on('chat', (username, message) => {
        //console.log(username, message)
        if (username === bot.username) return;
        //bot.chat(message);
    });

    bot.on('message', (jsonMsg) => {
        //console.log(jsonMsg)
    })
}

function updateTokens() {
    if (accessToken != bot.session.accessToken) {
        console.log('updating access token')
        accessToken = bot.session.accessToken
        options.accessToken = accessToken
        fs.writeFile('.accessToken', accessToken, (err) => {
            if (err) console.log('could not write .accessToken')
        })
    }

    if (clientToken != bot.session.clientToken) {
        console.log('updating client token')
        clientToken = bot.session.clientToken
        options.clientToken = clientToken
        fs.writeFile('.clientToken', clientToken, (err) => {
            if (err) console.log('could not write .clientToken')
        })
    }
}
