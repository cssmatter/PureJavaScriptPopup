
var model = document.querySelectorAll('.model')
var overlay = document.querySelector('.overlay')

function openPopup(open){
    model.forEach(function(trigger){
            if(trigger.dataset.popup == open) {
                trigger.style.display = 'block';
                overlay.style.display = 'block';
                
                var closemodel = document.querySelectorAll('.closeModel')

                closemodel.forEach(function(close){
                    close.addEventListener('click', function(){
                        trigger.style.display = 'none'
                        overlay.style.display = 'none';
                    })
                })
            }
    })
}
