export type GalleryItem = {
    s3_id: string;
    title: string;
    price: number;
    category : string;
  };
  


  export type LabelInput = {
    type:String,
    name:String,
    id:String,
    value:String,
    onChange:any,
    placeholder:String,
  }