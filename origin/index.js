   
  var compute = function(){
    var fromNum = 1
    var toNum = 1e8;

    var cnt = 0, i;

    for (i=fromNum;i<=toNum;i++){

      var tmp = i;
      while(tmp > 0){
        var test = tmp % 10;
        if (test === 2){
        	cnt++;
        }
        tmp = parseInt(tmp/10)
        //tmp = Math.floor(tmp/10)
      }
    }

    
    
    return cnt;
  }

  var resultPanel = document.getElementById('result');
  
  document.getElementById('start').onclick = function(){
    var t1 = new Date();
    console.log('start', t1);

    var count = compute();
    var t2 = new Date();

    console.log('done with origin', (t2-t1)/1000, t2, t1, 'Count', count);

    resultPanel.innerHTML = 'Count = ' + count + ' with duration: ' + (t2-t1)/1000;
  }
