const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

export interface Product {
  _id: string
  title: string
  description: string
  price: number
  category: string
  subCategory: string
  offer?: number
  photoUrl: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

class ApiService {
  private async fetchApi<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("API Error:", error)
      throw error
    }
  }

  // Get all products with optional filtering
  async getProducts(params?: {
    page?: number
    limit?: number
    category?: string
    subCategory?: string
  }): Promise<ApiResponse<Product[]>> {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.append("page", params.page.toString())
    if (params?.limit) queryParams.append("limit", params.limit.toString())
    if (params?.category) queryParams.append("category", params.category)
    if (params?.subCategory) queryParams.append("subCategory", params.subCategory)

    const query = queryParams.toString()
    return this.fetchApi<Product[]>(`/products${query ? `?${query}` : ""}`)
  }

  // Get single product by ID
  async getProduct(id: string): Promise<ApiResponse<Product>> {
    return this.fetchApi<Product>(`/products/${id}`)
  }

  // Get products by category
  async getProductsByCategory(category: string, page = 1, limit = 12): Promise<ApiResponse<Product[]>> {
    return this.fetchApi<Product[]>(`/products/category/${category}?page=${page}&limit=${limit}`)
  }

  // Get products by subcategory
  async getProductsBySubCategory(
    category: string,
    subCategory: string,
    page = 1,
    limit = 12,
  ): Promise<ApiResponse<Product[]>> {
    return this.fetchApi<Product[]>(`/products/category/${category}/${subCategory}?page=${page}&limit=${limit}`)
  }

  // Search products
  async searchProducts(query: string, page = 1, limit = 12): Promise<ApiResponse<Product[]>> {
    return this.fetchApi<Product[]>(`/products/search/${encodeURIComponent(query)}?page=${page}&limit=${limit}`)
  }

  // Add new product (for admin)
  async addProduct(productData: FormData): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        body: productData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("API Error:", error)
      throw error
    }
  }
}

export const apiService = new ApiService()
