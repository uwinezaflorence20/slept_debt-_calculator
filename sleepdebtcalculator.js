// the hours that i sleep for each day


const getSleepHours = day =>{
 if(day==='Monday'){
    return 7;
 }
  else if(day==='tuesday'){
    return 9;
 }
 else if(day==='wednesday'){
    return 8;
 }
 else if(day==='thursday'){
    return 10;
 }
 else if(day==='friday'){
    return 8;
 }
 else if(day==='saturday'){
    return 7;
 }
 else if(day==='sunday'){
    return 8;
 }
 else{
    return 'no sleeping';
 }
};
console.log(getSleepHours('sunday'));// print the hour slept on sunday



// claculating the hours someone slept the whole week and hours that he/she should sleep

const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('tuesday')+ getSleepHours('wednesday')+getSleepHours('thursday')+ getSleepHours('friday')+ 
  getSleepHours('saturday')+ getSleepHours('sunday'); 
  getIdealSleepHours = () => {
    var idealHours =8;
    return idealHours * 7;
  };
console.log( " the hours i slept in the week:" + getActualSleepHours());
console.log(" the hours i should sleep in the week:" + getIdealSleepHours());



// function to claculate sleep debt


const calculateSleptDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours=== idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) sleep than you needed this week. good and keep up.');
    }
    else if(actualSleepHours > idealSleepHours){
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more than  sleep than you needed this week. you need to wake up at time.')
    }
    else{
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}
calculateSleptDebt();


//other practice

/*const getActualSleepHours=() => 8 + 8 + 8 + 8 + 8 + 8 + 8;
console.log(getActualSleepHours());
const getIdealSleepHours = idealHours => idealHours*7;
const calculateSleepDebt = () => {
    const idealActualHours =getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if(idealActualHours=== idealSleepHours){
        console.log('You got ' + (idealSleepHours - idealActualHours) + ' hour(s) sleep than you needed this week. good and keep up.');
    }
    else if(actualSleepHours > idealSleepHours){
console.log('You got ' + (idealSleepHours - idealActualHours) + ' hour(s) more than  sleep than you needed this week. you need to wake up at time.')
    }
    else{
        console.log('You got ' + (idealSleepHours -idealActualHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }

  };
  calculateSleepDebt();*/