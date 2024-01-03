const fs = require('fs');

const filePath = 'addresses.json';

// Function to read data from the JSON file
const read = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data).addresses;
  } catch (error) {
    console.error('Error reading file:', error.message);
    return {};
  }
};

// Function to write data to the JSON file
const write = (addresses) => {
  try {
    const jsonData = JSON.stringify({addresses}, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf-8');
  } catch (error) {
    console.error('Error writing to file:', error.message);
  }
};

module.exports = {
  read,
  write,
};
