async function initMap() {
    await google.maps.importLibrary("maps");
    const mapElement = document.querySelector('gmp-map');
    const innerMap = mapElement.innerMap;
    console.log({ mapElement, innerMap });
}

initMap();

// //alert("I work");

// const dropBtn = document.getElementById("drop-menu-btn");
// const dropItems = document.getElementById("drop-down-items");

// dropBtn.addEventListener("click", function () {
//     alert("I was pressed");
//     if (dropItems.style.display === "none") {
//         dropItems.style.display = "block";
//     } else {
//         dropItems.style.display = "none";
//     }
// })
