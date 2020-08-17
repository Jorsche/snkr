const axios = require('axios');

let staticCount = 0 ;
let loopCount = 0;

const offlineRequest = async () => {
    try {
        const resp = await axios.get('https://www.nike.com/sg/launch');
        console.log(resp.data);
        staticCount = resp.data.length;
        console.log(staticCount);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const loopGet = async () => {
    try {
        const resp = await axios.get('https://www.nike.com/sg/launch');
        console.log(resp.data);
        loopCount = resp.data.length;
        console.log(loopCount);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const main =()=> {
    offlineRequest();
    while (true) {
        loopGet();
        if (staticCount === loopCount) {break;}
    }
    open('https://www.nike.com/sg/launch');
    let shoeSizeButton = document.getElementsByName("US S (4–6)");
    shoeSizeButton.click();
    let addToBagButton = document.getElementsByName("ADD TO BAG");
    addToBagButton.click();





}

main();





