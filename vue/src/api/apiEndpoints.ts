const apiUrl = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  getBanner: `${apiUrl}/home-page-hero?populate=heroBanner.media`,
  getSlides: `${apiUrl}/home-page-slide?populate=slide.media`,
  getAntiSpam: `${apiUrl}/anti-spam-protection?populate=*`,
  getIntroText: `${apiUrl}/home-page-intro?populate=*`,
  getFeatures: `${apiUrl}/feature-items?populate=*`,
};
