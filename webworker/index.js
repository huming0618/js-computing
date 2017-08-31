
var resultPanel = document.getElementById('result');

document.getElementById('start').onclick = function(){
    var t1 = new Date();
    console.log('start', t1);

    var count = compute();
    var t2 = new Date();

    console.log('done with origin', (t2-t1)/1000, t2, t1, 'Count', count);

    resultPanel.innerHTML = 'Count = ' + count + ' with duration: ' + (t2-t1)/1000;
}


function compute() {
  var blob = new Blob(
    Array.prototype.map.call(
      document.querySelectorAll('script[type="text\/js-worker"]'),
      function (oScript) { return oScript.textContent; }
    ),
    { type: 'text/javascript' }
  );

  
  function assignToWorker(fromNum, toNum){
      // Create a new worker containing all "text/js-worker" scripts.
    var worker = new Worker(window.URL.createObjectURL(blob));

    // Listen for a message from the worker
    worker.addEventListener('message', function (e) {
      console.log('From Worker', e.data);
    }, false);

    // Start the worker
    worker.postMessage([fromNum, toNum]);
  }

  
  assignToWorker(1, 12500000);
  assignToWorker(12500001, 25000000);
  assignToWorker(25000001, 50000000);
  assignToWorker(50000001, 75000000);
  assignToWorker(75000001, 1e8);
};