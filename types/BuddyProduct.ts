export interface Variant {
  asin: string;
  images: any[];
  link: string;
  is_current_product: boolean;
  price: number;
}

export interface Category {
  category: string;
  url: string;
}

export interface Reviews {
  total_reviews: number;
  rating: string;
  answered_questions: number;
}

export interface Price {
  symbol: string;
  currency: string;
  current_price: number;
  discounted: boolean;
  before_price: number;
  savings_amount: number;
  savings_percent: number;
}

export interface ProductInformation {
  dimensions: string;
  weight: string;
  available_from: string;
  available_from_utc: string;
  available_for_months: number;
  available_for_days: number;
  manufacturer: string;
  model_number: string;
  department: string;
  qty_per_order: string;
  store_id: string;
  brand: string;
}

export interface Badges {
  amazon_сhoice: boolean;
  amazon_prime: boolean;
  best_seller: boolean;
}

export interface BuddyProductInfo {
  title: string;
  description: string;
  feature_bullets: string[];
  variants: Variant[];
  categories: Category[];
  asin: string;
  url: string;
  reviews: Reviews;
  item_available: boolean;
  price: Price;
  bestsellers_rank: any[];
  main_image: string;
  total_images: number;
  images: string[];
  total_videos: number;
  videos: any[];
  delivery_message: string;
  product_information: ProductInformation;
  badges: Badges;
  sponsored_products: any[];
  also_bought: any[];
  other_sellers: any[];
}
