// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }
  
  get countSides(){
    sidesArr.length() + 1;
  }
  
  get perimeter(){
    sidesArr.reduce((a, b) => {
      return a + b;
    });
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    self.countSides === 3;
  }
}