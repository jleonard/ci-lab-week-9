var elements = document.querySelectorAll('.toggle');
Array.prototype.forEach.call(elements, function(element, index){
  element.addEventListener('click',function(e){
    console.log('toggle');
    element.parentNode.classList.toggle('active');
  });
});