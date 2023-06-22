const apiUrl = import.meta.env.VITE_API_URL;

interface ApiResponse<T> {
  data: any;
}

export const apiService = {
  async getHeroBanner<T>(id: string): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/hero-banners?populate=*&populate=heroBanner.media`
    );
    const heroBannerResponse: ApiResponse<T> = await result.json();
    const heroBannerResult = await heroBannerResponse.data.filter(
      (result: any) => result?.attributes?.uid === id
    )[0];
    return await heroBannerResult;
  },

  async getIntroText<T>(id: string): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/page-intros?populate=*&populate=pageIntro.backgroundImage`
    );
    const introTextResponse: ApiResponse<T> = await result.json();
    const introTextResult = await introTextResponse.data.filter(
      (result: any) => result?.attributes?.uid === id
    )[0];
    return await introTextResult;
  },

  async getMidContent<T>(id: string): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/page-mid-contents?populate=*&populate=pageMidContent.backgroundImage`
    );
    const midContentResponse: ApiResponse<T> = await result.json();
    const midContentResult = await midContentResponse.data.filter(
      (result: any) => result?.attributes?.uid === id
    )[0];
    return await midContentResult;
  },

  async getFeatures<T>(): Promise<ApiResponse<T>> {
    const result = await fetch(`${apiUrl}/feature-items?populate=*`);
    return await result.json();
  },

  async getProductItems<T>(
    category: string,
    imageGroup: string
  ): Promise<ApiResponse<T>> {
    const result = await fetch(
      `${apiUrl}/${category}?populate=*&populate=${imageGroup}.image`
    );
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
