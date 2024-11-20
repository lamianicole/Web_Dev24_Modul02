export interface ISmoothie { 
    name: string; 
    ingredients: string[]; 
    size: Size; 
    price: number; 
}

export enum Size { 
    Small = "small",
    Medium = "medium",
}