const sampleData = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grapes",
  "Honeydew",
  "Kiwi",
  "Pineapple",
  "Guava",
  "Peach",
  "Plum",
  "Date",
  "Fig",
  "Mango",
  "Papaya",
  "Jackfruit",
  "Orange",
  "Apricot"
];

const suggestionBox = document.getElementById('suggestions');
const input = document.getElementById("search");

function debounce(func, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}

function fetchSuggestions(query){
  return new Promise((resolve, reject) => {
    const results = sampleData.filter((element) => {
      return element.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
    setTimeout(() => resolve(results), 300)
  })
}

function showSuggestions(suggestions, query) {
  suggestionBox.innerHTML = "";
  console.log(suggestions)
  if (!suggestions.length) {
    console.log("heyy")
    suggestionBox.style.display = "none";
    return;
  }

  suggestions.forEach((item) => {
    const li = document.createElement("li");
    const regex = new RegExp(`(${query})`, "gi");
    li.innerHTML = item.replace(regex, `<span class="highlight">$1</span>`);
    suggestionBox.appendChild(li);
  });
  suggestionBox.style.display = "block";
}

async function handleSearch(e){
  const query = e.target.value.trim()
  if (!query) {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
    return;
  }
  if(query.length > 2){
    const result = await fetchSuggestions(query);
    result.forEach(element => {
      showSuggestions(result, query)
    });
  }
}
const debounceSearch = debounce(handleSearch, 500)
input.addEventListener('input', debounceSearch)