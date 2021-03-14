// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }
  
  get countSides(){
    return this.sidesArr.length;
  }
  
  get perimeter(){
    return this.sidesArr.reduce((a, b) => {
      return a + b;
    });
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    return this.countSides === 3;
  }
}