//EXAMPLE 
// Higher Order Function that returns a function
function createGreeter(greeting) {
    // Returning a new function
    return function(name) {
      console.log(${greeting}, ${name}!);
    };
  }
  
  // Creating a greeter function with a specific greeting
  const greetHello = createGreeter("Hello");
  greetHello("John"); // Output: Hello, John!
  
  // Creating another greeter function with a different greeting
  const greetGoodbye = createGreeter("Goodbye");
  greetGoodbye("Alice"); // Output: Goodbye, Alice!
  
 
  






//taske1
let num=[1,7,9,8,6];
let number=num.map(function (x){
 return x * x ;
});
console.log(number)


//taske2
let num2=[1,4,3,90,44,12,25];
let number2=num2.filter(function (x){
    return (x>10)
   });
   console.log(number2)

//taske3
let up=['rasha','nejar','relam']  
let uper=up.forEach(function(x){
   console.log(x.toUpperCase())
}) 


//taske40
function tt( func,4){
    return function{
        
    }
}
 function func{

 }