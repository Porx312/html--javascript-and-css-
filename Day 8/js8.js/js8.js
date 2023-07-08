function reverseString(s) {
  
/*   if(typeof s === 'string'){
    let invert = s.split('').reverse().join('')
    return console.log(invert)
  }
  if(typeof s === 'number'){
  return console.log(`Number(${s})`)
  } */
  try{
    let invert = s.split('').reverse().join('')
  console.log(invert)
  }
  catch(e){
  console.log(e.message)
  console.log(`Number(${s})`)
  }
   
  
}

reverseString(12)


