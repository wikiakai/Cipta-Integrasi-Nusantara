export interface requestParams {
  q: string
  limit?: number
  offset?: number
}
export interface GifType {
  type: string
  id: string
  slug: string
  url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  rating: string
  source_tld: string
  title: string
}

interface Ipagination {
  offset: number
  total_count: number
  count: number
}
export interface ApiResponse {
  data: GifType[]
  pagination: Ipagination
}