// this function is used to create smooth scrolilling from one section to section
// we are passong the item we want to jump into
function goNextFact(item) {
    var element_to_scroll_to = document.getElementById(item);
    element_to_scroll_to.scrollIntoView({
        behavior: 'smooth'
    });
}