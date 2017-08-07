require('../gpu.js/bin/gpu-core.js');
require('../gpu.js/bin/gpu.js');

const gpu = new GPU();
console.log('gpu', gpu);

const opt = {
    dimensions: [1e7 + 9999999]
};

const myFunc = gpu.createKernel(function() {
    var i = this.thread.x + 1;
    var tmp = i, cnt=0;
    while(tmp > 0){
        var test = tmp % 10;
        if (test === 2){
            cnt++;
        }
        tmp = Math.floor(tmp/10);
    }
    return cnt;
}, opt);

var t1 = new Date();
const result = myFunc();


var n = result.length;
var sum = 0;

while(--n){
    if (result[n] > 0){
        sum = result[n] + sum;
    }
}
var t2 = new Date();

console.log('result', sum, (t2-t1)/1000)