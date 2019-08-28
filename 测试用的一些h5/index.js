alert(123)

console.debug(true && true) // true
console.debug(1 && true) //true
console.debug(1 && 2) //2
console.debug("A" && 2) //2
console.debug("" && 2)  //""
console.debug(null && "B") //null
console.debug("A" && "B") //B
console.debug(1 && 2 && 3) //3
console.debug(1 && null && 3) // null
console.debug("" && null && 0) // ""
