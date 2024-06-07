let xbola = 300; 
let ybola = 200; 
let diametro = 20; 
let raio = diametro/2;
let xvb = 4;
let yvb = 4;
let xr = 5;
let yr = 150;
let lr = 7;
let ar = 80;
let xri = 585;
let yri = 150;
let colidiu = false;

let meuspontos = 0;
let pontosdoinimigo = 0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background("rgb(108,108,214)");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraqueteinimigo();
  mexeraquete();
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  texto();
  
}

function preload(){
  fundo=loadSound("fundo.wav")
  ponto=loadSound("triste.wav")
  raquetada=loadSound("raquetee.wav")
}

function mostrabola(){
  circle(xbola,ybola,diametro);
}
function mexebola(){
  xbola += xvb;
  ybola += yvb;
}
function quicabola(){
 if (xbola > width || xbola - raio < 0){
    xvb *= -1 
  }
  
  if (ybola > height || ybola - raio < 0){
    yvb *= -1 
  }  

  circle(xbola,ybola,diametro);
  
  xbola += xvb;
  ybola += yvb;
  
  if (xbola > width || xbola - raio < 0){
    xvb *= -1 
  }
  
  if (ybola > height || ybola - raio < 0){
    yvb *= -1 
  }
}

function mostraraquete(x,y) {
  rect(x,y,lr,ar);
  
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
    yr -=10;
  
  if (keyIsDown(DOWN_ARROW))
    yr +=10;
}

function mexeraqueteinimigo(){
  if (keyIsDown(87))
    yri -=10;
  
  if (keyIsDown(83))
    yri +=10;
}

function quicaraquetebola(x,y){
  
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xbola,ybola,raio);
  
  if(colidiu){
    xvb *= -1;
    raquetada.play()
  }
}   

function pontos(){
  if (xbola > 599){
    meuspontos += 1
    ponto.play()
}
  if (xbola < 13){
    pontosdoinimigo += 1
ponto.play()
  }
}
 
function placar(){
stroke("rgb(175,15,233)");
  textAlign(CENTER);
  textSize(20);
  fill("rgb(9,9,252)");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos, 170,12);
  fill("rgb(235,27,238)")
  rect(430,10,40,20);
  fill("rgb(250,241,241)");
  text(pontosdoinimigo, 450,12);
}

function texto(){
  let frase = "meus pontos"
  let xf = 120;
  let yf = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase,xf,yf);
  
  let frase2 = "pontos do inimigo"
  let xf2 = 380;
  let yf2 = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase2,xf2,yf2);
  
  

}