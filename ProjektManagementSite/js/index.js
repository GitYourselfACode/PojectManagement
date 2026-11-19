async function initMap() {
    await google.maps.importLibrary("maps");
    const mapElement = document.querySelector('gmp-map');
    const innerMap = mapElement.innerMap;
    console.log({ mapElement, innerMap });
}
initMap();


//alert("I work");
// const nameOne = document.getElementById("d--b");
// const dropItems = document.getElementById("drop-down-items");

// nameOne.addEventListener("click", () => {
//     alert("I was pressed");
    // if (dropItems.style.display === "none") {
    //     dropItems.style.display = "block";
    // } else {
    //     dropItems.style.display = "none";
    // }
// });
