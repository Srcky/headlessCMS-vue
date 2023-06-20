const apiUrl = import.meta.env.VITE_API_URL;

interface ApiResponse<T> {
  data: any;
}

export const apiService = {
  async getHeroBanner<T>(id: number): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/hero-banners/${id}?populate=*&populate=heroBanner.media`
    );
    return await result.json();
  },
  async getIntroText<T>(id: number): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/page-intros/${id}?populate=*&populate=pageIntro.backgroundImage`
    );
    return await result.json();
  },
  async getMidContent<T>(id: number): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/page-mid-contents/${id}?populate=*&populate=pageMidContent.backgroundImage`
    );
    return await result.json();
  },
  async getFeatures<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(`${apiUrl}/feature-items?populate=*`);
    return await result.json();
  },
  async getSlides<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/home-page-slide?populate=slide.media`
    );
    return await result.json();
  },
  async getAntiSpam<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(`${apiUrl}/anti-spam-protection?populate=*`);
    return await result.json();
  },
};
