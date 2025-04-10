let newItemCount = 11;
const conatiner = document.getElementById('data-container');
const loader = document.getElementById('loader');
function loadMoreItems(){
    for(let i=0; i< 11; i++){
        newItemCount++;
        const item = document.createElement('div');
        item.classList.add('card');
        item.textContent = `Item ${newItemCount}`
        conatiner.append(item);
    }
}
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        loadMoreItems()
    }
}, {threshold: 1.0})

observer.observe(loader)