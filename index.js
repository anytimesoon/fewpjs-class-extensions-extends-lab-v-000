// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }
  
  get countSides(){
    self.sidesArr.length;
  }
  
  get perimeter(){
    data.reduce((a, b) => {
      return a + b;
    });
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    self.countSides === 3;
  }
}