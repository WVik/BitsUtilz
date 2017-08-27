export class User {
  private name;
  private uid;
  private favourites;
  private wishlist;
  private clubAccess;
    constructor(    name,
       uid,
       favourites,
       wishlist,
       clubAccess){
         this.name=name;
         this.uid=uid;
         this.favourites=favourites;
         this.wishlist=wishlist;
         this.clubAccess = clubAccess;
    }
}
