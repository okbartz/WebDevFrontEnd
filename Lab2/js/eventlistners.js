 // provide skeleton

//  function expand(divname)
//  {
//    let mydiv=document.getElementById(divname);
//    mydiv.style.display = "block";    
//  }
 
//  function collapse(divname)
//  {
//    let mydiv=document.getElementById(divname);
//    mydiv.style.display = "none";        
//  }
const western = document.getElementById("westerntitle")
const borneo = document.getElementById("borneotitle")

function registerHandlers()
{
    
    western.addEventListener('mouseover',handleWestern, false);
    
    borneo.addEventListener('mouseover',handleBorneo, false);
    alert("Handlers registered");
}

function removeHandlers()
{
    
    western.removeEventListener('mouseover',handleWestern, false);
   
    borneo.removeEventListener('mouseover',handleBorneo, false);
    alert("Handlers removed");
}


function handleWestern()
{
    expand("western");
    collapse("borneo");
}

function handleBorneo()
{
    expand("borneo");
    collapse("western");
}



function expand(divname)
{
    let mydiv=document.getElementById(divname);
    mydiv.style.display = "block";    
}

function collapse(divname)
{
    let mydiv=document.getElementById(divname);
    mydiv.style.display = "none";        
}

window.onload = function(){
  this.document.getElementById("register").addEventListener('click',registerHandlers, false);
  this.document.getElementById("remove").addEventListener('click',removeHandlers, false);
}