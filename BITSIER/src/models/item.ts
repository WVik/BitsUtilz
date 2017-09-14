export class Item {
  private name;
  private id;
  private price={
    min: Number,
    max:Number
  };
  private uid;
  private condition;
  private category;
    constructor(    name,
       id,
       price,
       uid,
       condition,category){
         this.name=name;
         this.id=id;
         this.price=price;
         this.uid=uid;
         this.condition = condition;
         this.category = category;
    }
}
