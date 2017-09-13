export class News {
  private title;
  private description;
  private source;
  private timestamp;
  private category;
  private club;
    constructor(    title,
       description,
       source,
       timestamp,
       category,club){
         this.title=title;
         this.description=description;
         this.source=source;
         this.timestamp=timestamp;
         this.category = category;
         this.club = club;
    }
}
