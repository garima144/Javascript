const toastBtn = document.getElementById("toastBtn");
const toastBlock = document.getElementById("toastContent");
let timeout;
toastBtn.addEventListener("click", function(event){
    console.log("hey");
    toastBlock.style.visibility = "visible";
    timeout = setTimeout(() => {
        toastBlock.style.visibility = "hidden";
    }, 5000);
})

function closeToast(){
    clearTimeout(timeout);
    toastBlock.style.visibility = "hidden";
}