function fazer() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours() // Atribui hora exata do PC
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong >`
    if(hora>= 0 && hora < 12 ){
        //Bom Dia!
        img.src = 'manhã.png.jpg'
        document.body.style.background = "yellow"
    }else if (hora >=12 &&  hora <= 18){
        //Boa Tarde!
        img.src =  'tarde.png.jpg'
        document.body.style.background = "orange"
        
    }else {
        //Boa noite!
        img.src = 'noite.png.jpg' 
        document.body.style.background = "blue"
    }
/*Esse codigo foi parte de um teste de site simples sem interface de usuario
aprendi uns codigos novos, realmente não sei se é a melhor forma de codar   */

}