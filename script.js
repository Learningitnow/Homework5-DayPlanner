//setting time and date
$("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"))

//reloading time and date every second
setInterval(function(){
$("#currentDay").text(moment().format("MMM Do YYYY,h:mm:ss a"))
}, 1000)

// the save event listener
const saveToLocalStorage = function(event) {
    event.preventDefault()
    console.log(`[savetoLocalStorage] event.target=`, event.currentTarget);
    var id = event.currentTarget.id.replace('btnsave','input');
    var myInput = document.querySelector('#'+id).value;
    console.log("id is showing", id);
    console.log("My input is showing", myInput);
    // for input9 --> saves to to local storage as input9 = (whatever values)
    localStorage.setItem(id, myInput)
}

document.querySelector("#btnsave9").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave10").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave11").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave12").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave13").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave14").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave15").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave16").addEventListener("click", saveToLocalStorage )
document.querySelector("#btnsave17").addEventListener("click", saveToLocalStorage )

//! ... up to 17


// at START we load all these values
document.querySelector('#input9').value = localStorage.getItem('input9') || ''
document.querySelector('#input10').value = localStorage.getItem('input10') || ''
document.querySelector('#input11').value = localStorage.getItem('input11') || ''
document.querySelector('#input12').value = localStorage.getItem('input12') || ''
document.querySelector('#input13').value = localStorage.getItem('input13') || ''
document.querySelector('#input14').value = localStorage.getItem('input14') || ''
document.querySelector('#input15').value = localStorage.getItem('input15') || ''
document.querySelector('#input16').value = localStorage.getItem('input16') || ''
document.querySelector('#input17').value = localStorage.getItem('input17') || ''

//! ... up to 17

// now change the colour based on time.
var currentTime = moment().format('HH');
console.log( `current time is: ${currentTime}`)
for( var i=9; i<18; i++ ){
    // add a class if LESS than current time
    if( i<currentTime ){
        // add the class for before current time
        document.querySelector('#time'+i).classList.add('bg-secondary')
    } else if( i>currentTime ){
        // add the class for before current time
        document.querySelector('#time'+i).classList.add('bg-warning')
    }
}
//setting time for the day planner

