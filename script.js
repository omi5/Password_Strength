var pass = document.getElementById('password');
var meg = document.getElementById('message');
var strength = document.getElementById('strength');

pass.addEventListener('input', () =>{
    if(pass.value.length > 0){
        meg.style.display ='block';
    }
    else{
        meg.style.display ='none';
    }

    if(pass.value.length < 4){
        strength.innerHTML = 'weak';
        pass.style.borderColor = '#ff5925';
        meg.style.color = '#ff5925';

    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strength.innerHTML ='medium';
        pass.style.borderColor = 'yellow';
        meg.style.color = 'yellow';
    }
    else if(pass.value.length >=8){
        strength.innerHTML = 'strong';
        pass.style.borderColor = '#26d730';
        meg.style.color = '#26d730';
    }
})