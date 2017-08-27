export class News {
  private title;
  private description;
  private source;
  private timestamp;
  private category;
    constructor(    title,
       description,
       source,
       timestamp,
       category){
         this.title=title;
         this.description=description;
         this.source=source;
         this.timestamp=timestamp;
         this.category = category;
    }
}
