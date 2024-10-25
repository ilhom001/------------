// let n=new Promise((resolve , reject)=>{
//     if(0.5<Math.random()*1)
//         resolve('reshka')
//     else
//     reject('oriol')
// }
   
// )

// n.then(result=>console.log(result)).catch(error=>console.log(error))



class AlarmClock {
    constructor(alarmTime) {
      this.alarmTime = alarmTime;
    }
  
    start() {
      this.intervalId = setInterval(() => {
        
        
        if (new Date().toLocaleTimeString() === this.alarmTime) {
          console.log('Будильник звонит!');
          clearInterval(this.intervalId);
        }
      }, 1000);
    }
  }
  

  const alarm = new AlarmClock('15:52');
  alarm.start();

 
  
  

        





   