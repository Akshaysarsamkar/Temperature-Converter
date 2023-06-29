function check() {
  const input = document.getElementById ("get_input").value 

const data = document.getElementById ("data").value
  
  console. log(input, data)

  if(data == "cel"){
     var f = input * (9/5)+32;
     document.getElementById("ans"). innerHTML =`${f.toPrecision(2)} °F`
  }
  else{
   var c = (input- 32) * 5/9
   document.getElementById("ans"). innerHTML =`${c.toPrecision(2)} °C`
  } 
}
