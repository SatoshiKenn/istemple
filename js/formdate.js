/*form date*/
const formdate = new Date()
let date = formdate.getFullYear()+'-'+(formdate.getMonth()+1)+'-'+formdate.getDate(); /*getMonth starts in 0 that is why we add 1 to show the correct number of the month*/
let time = formdate.getHours() + ":" + formdate.getMinutes() + ":" + formdate.getSeconds();
let dateTime = `${date}:${time}`;
document.querySelector('#formdate').value = dateTime;
