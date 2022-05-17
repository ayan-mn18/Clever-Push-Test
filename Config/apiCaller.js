const axios = require('axios');

const apiCaller = async(URL) =>{
    let data ;
    await axios.get(URL).then(response => data = response.data).catch(err => console.error(err));
    return data;
};

module.exports = apiCaller;