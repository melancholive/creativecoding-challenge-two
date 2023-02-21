int x = 0;
int y = 0;
int xs;
int ys;
int width = 100;
int probability = 9;

void setup() {
  size(800,800);
  background(255);
  
  // draw individual square + choose random coordinate within square
  // mySquare(((int) random(x+35,x+65)), ((int) random(y+35,y+65)) ); 
  
  for(y = 0; y <= 800; y+= 100){
    for(x = 0; x <= 800; x +=100){
      square(x,y,100);
      smallSquare();
      drawMoreSquare();
      probability = 10;
    }
  }
}

void draw(){
}

void drawMoreSquare(){
  int xLeft = (xs - x)/5; //space between small square and big square (left)
  int yLeft = (ys - y)/5;
  int xRight = (x+80 -xs)/5; //space between small square and big square (right)
  int yRight = (y+80 - ys)/5;
  
  //makes small square
  square(xs,ys,20);
  
  //makes in between squares
  for(int i = 1; i <= 4; i++){
    noFill();
    rect(xs-xLeft*i, ys-yLeft*i, 20+(xLeft+xRight)*i, 20+(yLeft+yRight)*i);
  }
  

}

void smallSquare(){
  
  //chooses a random square configuration
  probability = (int) (probability*random(0,1));
  if ( probability == 0 ){
    xs = 20 + x; ys = 20 + y;
  } else if ( probability == 1 ){
    xs = 20 + x; ys = 40 + y;
  } else if ( probability == 2 ){
    xs = 20 + x; ys = 60 +y;
  } else if ( probability == 3 ){
    xs = 40 + x; ys = 20 + y;
  } else if ( probability == 4){
    xs = 40 + x; ys = 40 + y;
  } else if ( probability == 5){
    xs = 40 + x; ys = 60 + y;
  } else if ( probability == 6){
    xs = 60 + x; ys = 20 + y;
  } else if ( probability == 7){
    xs = 60 + x; ys = 40 + y;
  } else if ( probability >= 8){
    xs = 60 + x; ys = 60 + y;
  }
}
  
  
  /*
  // make big square
  square(x,y,100);
  // add to x
  x += 100;
  if ( x >= 800 ){
    // when the square reaches the end, reset x and increase y
    y += 100;
    x = 0;
  }
  
  int incX = (randX-x)/5;
  int incY = (randY-y)/5;
  
  // make smallest square
  square(randX,randY,20);
  
  if (randX <= x){
    randX -= incX;
    randY -= incY;
    square(randX,randY,20+
  }
  
  */