lightbox.option({
    'resizeDuration': 200,  //Image resizing animation takes 0,2 seconds
    'wrapAround':true,      //Last image links back to the first
    'fadeDuration': 300     //Fade affect takes 0,3 seconds
}) 


function searchItem() {
    let searchText =
    document.getElementById("searchBox").value;
    if (searchText.toLowerCase() == "fruits") {
        document.getElementById("result").innerHTML= "Fruits found!";
    } else {
        document.getElementById("result").innerHTML= "No results found!";
    }
    
}