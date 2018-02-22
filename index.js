var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.splice(2);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1);
  return kittens;
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(kittens.length - 1
}