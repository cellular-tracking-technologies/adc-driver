import Adc from "../adc"

let options = {type:"Ads7924"};
let x = new Adc(options);
x.init();
console.log(x.read(0) * (5.016 / 4096) * 6);
console.log(x.read(1) * (5.016 / 4096) * 6);
console.log(x.read(2) * (5.016 / 4096));