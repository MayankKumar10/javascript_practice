import React from 'react'

export const JavascriptMCRound = () => {


  let obj = {
    firstName : 'Mayank',
    LastName: 'Kumar',
  }

  let function1 = (city, country) =>{
    return console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`)
  }

  let newBind = function1.bind(obj, "Delhi", "india")

  newBind()

  Function.prototype.myBind = function (...args) {
    let _this = this, params = args.slice(1);

    return function (...args1){
      _this.apply(args[0], [...params, ...args1])
    }
  }  

  Array.prototype.myMap = function ( cb ) {
    let arr = [];

    for(let i=0; i< this.length; i++){
      cb.push(this[i], i, this)
    }

    return arr;
  }

  Array.prototype.myFilter = function ( cb ) {
    let arr = [];

    for(let i=0; i< this.length; i++){
      if(cb.call(this, this[i], i, this)){
        arr.push(this[i])
      }
    }
    return arr
  }

  Array.prototype.myReduce = function ( cb, initialState ){
    let acc = initialState

    for(let i=0; i<this.length; i++){
      if(acc !== undefined){
        acc = cb.call(undefined, acc, this[i], i, this)
      } else {
        acc = this[i]
      }
    }
    return acc
  }

  let TwoSum = (arr, num) =>{
    let arrNew = new Map();


    for(let i=0; i < arr.length ; i++){
      let remaining = num - arr[i]

      if(arrNew.has(remaining)){
        return [arrNew.get(remaining), i]
      } 
        arrNew.set(arr[i], i)
      return []
    }
  }

  console.log("TwoSums", TwoSum([2, 7, 11, 15], 9))


  let arrayOfTwoSum = (arr, num) => {

    let arrNew = []

    for(let i=0; i< arr.length; i++){
      for(let j=i+1; j< arr.length; j++){
        if(num === arr[i]+ arr[j]){
          arrNew.push([i,j])
        }
      }
    }
    
    return arrNew
  }

  console.log("arrOfTwoSum", arrayOfTwoSum([2, 7, 11, 15], 9))


  let closures = function() {
    let value = 0;

    let increment= () => {
      value++
      console.log("value increment", value)
    }

    let decrement= () =>{
      value--
      console.log("value decrement", value)
    }

    return [increment, decrement]
  }

  let [increment, decrement] = closures()

  increment()
  increment()
  increment()
  decrement()
  increment() 


  let data = [
    "King's street object",
    "Turing street object",
    "Kirk street object",
    "Tom's street object",
    "Tanner street object",
    "Smith street",
    "Queen's street"
  ];
  
  // Initialize the result object
  let result = {
    k: [],
    T: []
  };

  data.forEach((street)=>{

    if(street.endsWith("object")){
      let firstLetter = street.charAt(0)

      if(firstLetter ==="K" || firstLetter ==="k"){
        result.k.push(street)
      } else if(firstLetter === "T" || firstLetter === "t"){
        result.T.push(street)
      }
    }
  })

  console.log("results", result)

  return (
    <div>JavascriptMCRound</div>
  )
}
