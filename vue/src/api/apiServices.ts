import { API_ENDPOINTS } from './apiEndpoints';

interface ApiResponse<T> {
  data: any;
}

export const apiService = {
  async getBanner<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(API_ENDPOINTS.getBanner);
    return await result.json();
  },
  async getSlides<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(API_ENDPOINTS.getSlides);
    return await result.json();
  },
  async getAntiSpam<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(API_ENDPOINTS.getAntiSpam);
    return await result.json();
  },
  async getIntroText<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(API_ENDPOINTS.getIntroText);
    return await result.json();
  },
  async getFeatures<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(API_ENDPOINTS.getFeatures);
    return await result.json();
  },
};
