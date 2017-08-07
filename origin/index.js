    var fromNum = 1
    var toNum = 1e8;

    var cnt = 0, i;
  
    var t1 = new Date();
    console.log('start', t1);
    for (i=fromNum;i<=toNum;i++){

      var tmp = i;
      while(tmp > 0){
        var test = tmp % 10;
        if (test === 2){
        	cnt++;
        }
      	tmp = parseInt(tmp/10)
      }
    }
    var t2 = new Date();
    console.log('done webworker', (t2-t1)/1000, t2, t1, 'Count', cnt);