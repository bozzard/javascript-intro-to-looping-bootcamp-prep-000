
function forLoop(array) {
for (let i = 0; i < 25; i++) {

   if (i == 1) {
    array[i] = "I am "+ i + " strange loop."
  }
  else {
    array[i] = "I am "+ i + " strange loops."
  }
}
//console.log(array);
return array;
}


function whileLoop(n) {
  while (n > 1) {
    console.log(n);
    n -= 1;
  }
  return ('done');
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
      array.pop()
  } while (array.length > 0 && maybeTrue());
  return array;
}
