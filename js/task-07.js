const refs = {
    inputRange: document.getElementById('font-size-control'),
    spanText: document.getElementById('text'),
};


refs.inputRange.addEventListener('input', onTargetInput);


function onTargetInput(event) {
    console.log(refs.spanText.style.fontSize = event.currentTarget.value + 'px');
    refs.spanText.style.fontSize = event.currentTarget.value + 'px';
    };
   
    