// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }
  
  get countSides(){
    this.sidesArr.length;
  }
  
  get perimeter(){
    self.sidesArr.reduce((a, b) => {
      return a + b;
    });
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    this.countSides === 3;
  }
}