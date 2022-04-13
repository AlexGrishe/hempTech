export interface ProductInfo {
  id: number;
  name: string;
  description: string;
  descriptionAll: string;
  detail: string;
  category: string;
  subCategory: string;
  img: string;
  img2?: string;
  img3?: string;
  gallery?: string[];
  onSale?: boolean;
  costPrice?: string | number | any;
  salePrice?: string;
  inStock: boolean;
  remove?: boolean;
  preOrder?: boolean;
  amount?: number | any;
  peculiarities?: string;
  peculiaritiesTwo?: string;
  peculiaritiesThree?: string;
  manufacturer?: string;
  halfSeed?: string;
  floweringType?: string;
  genetics?: string;
  speciesComposition?: string;
  thc?: string;
  cbd?: string;
  floweringPeriod?: string;
  plantHeight?: string;
  harvest?: string;
  growingMedium?: string;
  prizeWinner?: string;
}

export interface CategoryInfo {
  img?: string;
  name?: string;
  redirect?: string;
  count?: number;
  products?: ProductInfo[];
}

export interface ReviewsInfo {
  name: string;
  img: string;
  date: string;
}

export interface MenuInfo {
  name: string;
  hasChildren: boolean;
  redirect?: string;
  children?: MenuInfo[];
}

export interface Shipping {
  type: string;
  price: number;
}
