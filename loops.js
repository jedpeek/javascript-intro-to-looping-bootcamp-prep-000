array = [];
function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i === 1){
    array.push("I am 1 strange loop.")
    }
    else{
     array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
let n = 10
function whileLoop(n){
  while(n > 0){
  console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do{
  delete arr[0]
} while(arr.length > 0 && maybeTrue());