# Availability Checker for Webservices

This script tracks the uptime of a list of services by doing a GET request every 5 minutes.\
If the service is offline it sends a push notification to your devices using Pushover.

> **⚠️ DISCLAIMER**\
> Causing constantly repeating traffic of this kind might get flagged as an attack.\
> Please make sure you have the permission of the service admin to monitor the service!\
> I am not responsible for any damage caused by using the script!

## Setup
### Install dependencies
```
npm install
```

### Setup the config
Rename example-config.json to config.json
Rename example-addresses.json to addresses.json

### Configure Pushover
Configure the Pushover service in the config.json file (token and user)

### Configure Messages
Configure the messages in the config.json file to fit your taste :)

### Setup Service list
Setup addresses and names in the addresses.json file\
-> hint: Set last_status to 200 if you don't want to recieve a notification on the first startup, otherwhise leave it at any other value

### Start script
```
node index.js
```