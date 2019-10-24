document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const placeFormEl = document.getElementById("place-form");

  placeFormEl.addEventListener("submit", event => {

    event.preventDefault(); 

    const placeNameInputEl = document.getElementById("place_name"); 
    const placeName = placeNameInputEl.value; 
    placeNameInputEl.value = ""; 

    const ul = document.getElementById("sf-places"); 
    const li = document.createElement("li"); 

    li.textContent = placeName; 

    ul.appendChild(li)
  }); 



  // adding new photos

  // --- your code here!



});
