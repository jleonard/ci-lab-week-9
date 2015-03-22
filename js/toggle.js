var elements = document.querySelectorAll('.toggle');
Array.prototype.forEach.call(elements, function(element, index){
  el.parentNode.classList.toggle('active');
});