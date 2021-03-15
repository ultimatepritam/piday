class Block {
  constructor(x, w, m, v) {
    this.x = x;
    this.y = height - w;
    this.w = w;
    this.v = v;
    this.m = m;
  }
  
  collide(other){
    return !(this.x + this.w < other.x || this.x > other.x + other.w);
  }
  
  hitwall(){
    return(this.x<0);
  }
  
  reverse(){
    this.v *= -1;
  }
  
  bounce(other){
    let sumM = this.m + other.m;
    let newV = (this.m - other.m)/sumM * this.v;
    newV += (2 * other.m / sumM) * other.v;
    return newV;
  }
  
  update(){
    this.x += this.v;
  }

  show(){
    image(blockImg, this.x, this.y, this.w, this.w);
  }
 
}
