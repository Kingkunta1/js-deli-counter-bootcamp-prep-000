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
   return "The line is currently empty."}
     
else{  
  var shop = ''
    for( var i=0;i<current.length;i++){
      
    }
    
    
     //{`${i+1} ${current[i]}` }
    
    //how to iterate through each element?
    return (`The line is currently: 
    
     1.${current[0]}, 2. ${current[1]}, 3. ${current[2]}`)

//  return (`The line is currently: something else goes here)
    
}
  }
