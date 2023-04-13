export interface Width {
  amount: number;
  unit: string;
}

export interface Depth {
  amount: number;
  unit: string;
}

export interface Length {
  amount: number;
  unit: string;
}

export interface Size {
  width: Width;
  depth: Depth;
  length: Length;
}

export interface Weight {
  amount: number;
  unit: string;
}

export interface PackageDimensions {
  size: Size;
  weight: Weight;
}

export interface VariantSpecific {
  dimension: string;
  value: string;
}

export interface AllVariant {
  product_id: string;
  variant_specifics: VariantSpecific[];
}

export interface VariantSpecific2 {
  dimension: string;
  value: string;
}

export interface Epid {
  type: string;
  value: string;
}

export interface EpidsMap {
  MPN: string;
  EAN: string;
  UPC: string;
}

export interface ProductInfo {
  timestamp: number;
  status: string;
  feature_bullets: string[];
  title: string;
  aplus_html: string;
  html_product_description: string;
  product_description: string;
  images: string[];
  main_image: string;
  product_details: string[];
  brand: string;
  categories: string[];
  original_retail_price: number;
  package_dimensions: PackageDimensions;
  all_variants: AllVariant[];
  delight_text: string;
  tag_title: string;
  variant_specifics: VariantSpecific2[];
  asin: string;
  product_id: string;
  retailer: string;
  stars: number;
  review_count: number;
  question_count: number;
  num_offers: number;
  fresh: boolean;
  pantry: boolean;
  handmade: boolean;
  digital: boolean;
  buyapi_hint: boolean;
  parent_asin: string;
  customer_images: string[];
  blank_box: boolean;
  price: number;
  ship_price?: any;
  addon: boolean;
  epids: Epid[];
  epids_map: EpidsMap;
}

export interface ContextProductInfo {
  id: number;
  price: number | null;
  symbol: string;
  image: string;
  title: string;
  url: string;
  asin: string;
  quantity: number;
}
