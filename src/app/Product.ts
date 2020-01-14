interface Prices{
    NormalPrice:string;
    SalesPrice ?:string;
}
interface ProductMeta{
    Availability:string;
    Brand?:string;
    SKU?:string;
}

export class Product{
    _id:number;
    Name:string;
    Description:string;
    Price:Prices;
    Meta:ProductMeta;
    Colors?:string[];
    Material?:string[];
    Gallery: string[];
    cardBadge?:string;
    Section:string[];
    Category:string;
}

