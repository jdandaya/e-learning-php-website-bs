function hideDiv(element){
    var sibling = element.nextElementSibling; 
    if(sibling.style.display == "none"){
        sibling.style.display = "block";
    } else {
        sibling.style.display = "none";
    }
}