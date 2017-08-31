
// fetch('count.wasm').then(response => response.arrayBuffer())
// .then(bytes => instantiate(bytes, importObject))
// .then(instance => console.log(instance));

var count_number_two = null;
fetch('count.wasm').then(response => {
    console.log('WASM Fetch Done')
    return response.arrayBuffer();
})
.then(bytes => {
    var wasmModule = new WebAssembly.Module(bytes);
    console.log('wasmModule', wasmModule);
    var wasmInstance = new WebAssembly.Instance(wasmModule);
    console.log('wasmInstance', wasmInstance);
    console.log('export', wasmInstance.exports.count_number_two);
    count_number_two = wasmInstance.exports.count_number_two;
    console.log('WASM Loaded')
    //var test = wasmInstance.exports.count_number_two(1, 1e8);
    //alert(test)
})



var resultPanel = document.getElementById('result');

document.getElementById('start').onclick = function(){
    compute();
}


function compute() {


  var t1 = new Date();
  console.log('start', t1);

  var ack = 0;
  var count = count_number_two(1, 1e8);

  var t2 = new Date();

  console.log('done with worker', (t2-t1)/1000, t2, t1, 'Count', count);
  resultPanel.innerHTML = 'Count = ' + count + ' with duration: ' + (t2-t1)/1000;
};


