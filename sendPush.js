const axios = require('axios')
const config = require('./config.json')

module.exports = async function(status, servicename) {

    title = ''
    message = ''
    if(status == 200) {
        title = config.icons.online + ' ' + servicename + ' ' + config.titles.online
        message = servicename + ' ' + config.messages.online
    } else if(status == 500) {
        title = config.icons.offline + ' ' + servicename + ' ' + config.titles.offline
        message = servicename + ' ' + config.messages.offline
    } else {
        title = config.titles.update  + ' ' + servicename + ' ' + config.titles.update
        message = servicename + ' ' + config.messages.update
    }

    response = await axios.post(`${config.address}?token=${config.token}&user=${config.user}&title=${title}&message=${message}${status == 500 ? '&priority=1' : '&priority=0'}`)
}


