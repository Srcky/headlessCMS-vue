export interface FeatureItem {
  image?: any;
  heading: string;
  description: string;
}

export interface PopularProductItem {
  uid: string;
  image?: any;
  title?: string;
  description?: string;
  button?: string;
}

export interface MediaContent {
  uid: string;
  heading?: string;
  description?: string;
  textColor?: string;
  button?: string;
  buttonLink?: string;
  transparentOverlay?: boolean;
  media: any;
}
export interface IntroHeading {
  uid: string;
  heading?: string;
  description?: string;
  longDescription?: string;
  backgroundImage?: any;
}
