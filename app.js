let naruto=document.querySelector('.naruto');
let body=document.querySelector('body');
let sonido1= document.getElementById('sonido1');
let explosion= document.getElementById('explosion');
let live=document.querySelector('i');
let times=document.getElementById('times');
let lives=5;
let second=60;
setInterval(() => {
    second--;
    times.textContent=second;
    if(second==0){
        alert('You Win!');
        location.reload();
    }
}, 1000);

document.addEventListener('mousemove',(e)=>{
    naruto.style.left=(e.clientX-40)+'px';
})
// generar rasengan
document.addEventListener('click',()=>{
    let rasengan=document.createElement('div');
    rasengan.classList.add('rasengan');
    rasengan.style.bottom=70+'px';
    rasengan.style.left=(naruto.getBoundingClientRect().left+10)+'px';
    body.append(rasengan);
    sonido1.play();
}) 
// movimiento del rasengan
setInterval(()=>{
    let rasengans= document.querySelectorAll('.rasengan')
    rasengans.forEach(rasengan => {
        rasengan.style.top=(rasengan.getBoundingClientRect().top-20)+'px';

        if(rasengan.getBoundingClientRect().top<=0){
            rasengan.remove();
        }

        //detectar colisiones
        let enemigos=document.querySelectorAll('.enemigo');
        
        enemigos.forEach(enemigo => {
            if(rasengan.getBoundingClientRect().top<=enemigo.
            getBoundingClientRect().top+80){
                if(rasengan.getBoundingClientRect().left>=enemigo.
                getBoundingClientRect().left && rasengan.
                getBoundingClientRect().left<=enemigo.
                getBoundingClientRect().left+80){
                    enemigo.style.backgroundImage='url("./img/madara_explosion.png")';
                    explosion.play();
                    setTimeout(() => {
                        enemigo.remove();
                        explosion.stop();
                    }, 100);
                }               
            }
        });
        });
},100);

// generar enemigos
let aparecer=0;
setInterval(()=>{
    aparecer++;
    if(aparecer%10==0){
    let enemigo=document.createElement('div');
    enemigo.classList.add('enemigo');
    body.append(enemigo);
    enemigo.style.left=(Math.random()*window.innerWidth-100)+'px';
    }
    let enemigos=document.querySelectorAll('.enemigo');
    enemigos.forEach(element => {
        element.style.top=(element.getBoundingClientRect().top+10)+'px';
      if(element.getBoundingClientRect().top>naruto.
      getBoundingClientRect().top){
        lives--;
        live.textContent=lives;
        if (lives==-1){
            alert('Game Over');
            location.reload();
        }
        element.remove();
      }
    });

},100);