const { read, write } = require('./fop')
const axios = require('axios')
const addresses = require('./addresses.json')
const sendPush = require('./sendPush')
const cron = require('node-cron')

const endpoints = JSON.parse(JSON.stringify(addresses)).addresses

console.log("[PANEL] Client is online!")
console.log(`Script started at ${new Date()}`)

cron.schedule('0 */5 * * * *', () => {
    checkStatus()
})
cron.schedule('0 0,15,30,45 * * * *', () => {
    report()
})

async function checkStatus() {
    for(var i = 0; i < endpoints.length; i++) {
        try {
            const response = await axios.get(endpoints[i].address)
            const status = response.status
            if(status != read()[i].last_status) {
                await sendPush(status, endpoints[i].name)
                endpoints[i].last_status = status
                write(endpoints)
            }
        }
        catch(e) {
            console.log(e)
        }
    }
}

function report() {
    tmpdata = read()
    tmpdate = new Date()
    console.log(`\n- Report ${tmpdate.getDate()}.${tmpdate.getMonth() + 1}.${tmpdate.getFullYear()} at ${tmpdate.getHours()}:${tmpdate.getMinutes()} -------------------------------`)
    for(var i = 0; i < tmpdata.length; i++) {
        console.log(`   ${tmpdata[i].address}: ${tmpdata[i].last_status} ${tmpdata[i].last_status == 200 ? '(OK)' : '(Internal Server Error)'}`)
    }
}