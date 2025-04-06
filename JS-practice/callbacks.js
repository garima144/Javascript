// Print is a higher order function as it accepts a function as an argument and also 
//an example of callack function
function print(fn) {
  return fn();
}
// callback will have this pointing to global object
setTimeout(() => {
  console.log("Time out");
}, 3000);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("button clicked");
});

const btn2 = document.getElementById("btn");
btn2.addEventListener("click", function () {});

function person(){
    let person = {
        name: "me",
        dob: "12-2-23"
    }
    function calculateage(){
        // calculate age of person
        //this here refers to global object
    }
    person.age = calculateage();
    return person
}