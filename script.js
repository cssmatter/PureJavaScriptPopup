var model = document.querySelectorAll('.model')
var closes = document.querySelectorAll('.close')
var overlay = document.querySelector('.overlay')


function openPopup(open){
    
    for(i = 0; i < model.length; i++){
        let currentModel = model[i].getAttribute('data-popup');
        if(open == currentModel){
            model[i].style.display = 'block'
            overlay.style.display = 'block'
        }
    }

}

function closePop(){
    for(i = 0; i < closes.length; i++){
        let closeModel = closes[i].closest('.model')
        if(closeModel.style.display == 'block'){
            closeModel.style.display = 'none'
            overlay.style.display = 'none'
        }
    }
}

function closePopup(e){
    closePop()
}

overlay.addEventListener('click', function(){
    closePop()
})