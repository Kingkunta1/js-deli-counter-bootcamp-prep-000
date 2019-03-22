function takeANumber(current,name)
{ 
  
 current.push(name)
  
  
return (`Welcome, ${name}. You are number ${current.length} in line.`)
}


function nowServing(current){

  
if(current.length === 0)
{return "There is nobody waiting to be served!"} 

 else{  
    return (`Currently serving ${current.shift()}.`)

  }
}

//var curr= [ "bob", "jill", "bob", "jill"]
function currentLine(current){
  if(current.length===0){  
    return "The line is currently empty."
  }else{  
    var shop = 'The line is currently:'
    for( var i=0;i<current.length;i++){
      shop += ` ${i+1}. ${current[i]}`
      if( i < current.length - 1){
       shop +=','  
      }
   
    } 
    return shop
  } 
}
