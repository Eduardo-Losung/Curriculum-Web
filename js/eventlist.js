// Desenvolvido por Lucas Pamplone Instagram: @pamp_z

let anchors = document.querySelectorAll('a');
 for (let i = 0; i < anchors.length; i++) {
     anchors[i].addEventListener("click", function() {
         anchors[i].classList.add('visited');
     });
 }