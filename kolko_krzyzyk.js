var plansza = [['', '', ''],
               ['', '', ''],
               ['', '', '']]
var sz = 400;
var h = sz/3;
var gracz; 
var end = false;
var p, wyn, ruchy = 0;

function setup() {
  createCanvas(sz, sz);
  background(240);
  strokeWeight(3);
  noFill();
  gracz = random([1,0]);
  linie();
  p = createP('Gracz '+(gracz+1));
}


function linie() {
  line(h, 0, h, height);
  line(2*h, 0, 2*h, height);
  line(0, h, width, h);
  line(0, 2*h, width, 2*h);
}

function mousePressed() {
  let a = int(map(mouseX, 0, width, 0, 3));
  let b = int(map(mouseY, 0, width, 0, 3));
  if (plansza[a][b] == '' && !end) {
    if (gracz == 1) { 
      krzyzyk(a, b);
    }
    else { 
      kolko(a, b);
    }
    wyn = koniec();
    
  //print(end);
    gracz = 1 - gracz;
    p.html('Gracz '+(gracz+1));
    ruchy++;
  }
  if (end) p.html("Wygrał " + wyn);
  if (ruchy == 9) p.html("Remis!");
}

function kolko(a, b) {
  ellipse(h*a+h/2,h*b+h/2, h/2, h/2); 
  plansza[a][b] = 'O';
}

function krzyzyk(a, b) {
  line(h*a + h/4,h*b + h/4, h*a + 3*h/4,h*b + 3*h/4);
  line(h*a + 3*h/4,h*b + h/4, h*a + h/4,h*b + 3*h/4); 
  plansza[a][b] = 'X';
}

function koniec() {
  if ((plansza[0][0] != '') && 
      ((plansza[0][0] == plansza[0][1] && plansza[0][2] == plansza[0][1])
     ||(plansza[0][0] == plansza[1][0] && plansza[2][0] == plansza[1][0]))) 
  {
    end = true;
    return plansza[0][0];
  }
  if ((plansza[2][2] != '') &&
      ((plansza[0][2] == plansza[1][2] && plansza[1][2] == plansza[2][2])
     ||(plansza[2][0] == plansza[2][1] && plansza[2][2] == plansza[2][1]))) 
  {
    end = true;
    return plansza[2][2];
  }
  
  if ((plansza[1][1] != '') &&
      ((plansza[0][1] == plansza[1][1] && plansza[1][1] == plansza[2][1])
      ||(plansza[0][2] == plansza[1][1] && plansza[2][0] == plansza[1][1])
      ||(plansza[0][0] == plansza[1][1] && plansza[2][2] == plansza[1][1])
      ||(plansza[1][0] == plansza[1][1] && plansza[1][2] == plansza[1][1]))) 
  {
    end = true;
    return plansza[1][1];
  } 
}