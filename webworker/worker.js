self.addEventListener('message', function (e) {

  var fromNum = e.data[0];
  var toNum = e.data[1];

  var cnt = 0, i;

  var t1 = new Date();
  console.log('start webworker', t1, e.data);

  for (i=fromNum;i<toNum+1;i++){
  
    var tmp = i;
    while(tmp > 0){
      var test = tmp % 10;
      if (test === 2){
        cnt++;
      }
      //tmp = parseInt(tmp/10)
      tmp = Math.floor(tmp/10)
    }
  }

  var t2 = new Date();
  console.log('done webworker', (t2-t1)/1000, t2, t1, 'Count', cnt);
  self.postMessage(cnt)

}, false);