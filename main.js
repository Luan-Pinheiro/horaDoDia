function carregar(){
    let text = document.getElementById('msg')
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    hora = 19
    if(hora>1 && minuto > 1){
        text.innerText = `Agora são ${hora} horas e ${minuto} minutos`
    }else if( hora == 1 && minuto != 1){
        text.innerText = `Agora são ${hora} hora e ${minuto} minutos`
    }else if( hora != 1 && minuto == 1){
        text.innerText = `Agora são ${hora} horas e ${minuto} minuto`
    }else {
        text.innerText = `Agora são ${hora} hora e ${minuto} minuto`
    }
    if(hora >= 0 && hora < 12){
        img.src = 'manha1.png';
        document.body.style.background = '#faea5c'
    }else 
        if(hora >= 12 && hora < 18){
            img.src = 'tarde1.png';
            document.body.style.background = '#faca9c'
        }
        else{
            img.src = 'noite1.png'
            document.body.style.background = '#1a5353'
        }
}