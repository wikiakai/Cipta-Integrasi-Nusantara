import axios from 'axios';
import { requestParams, ApiResponse } from './../types';
const API_KEY = '0dM1sLQEXmIAHNk41nKbWnEotYhUn0FQ'
export async function getSearchData(params: requestParams): Promise<ApiResponse> {
  const { q, limit=9, offset } = params
  const url = 'https://api.giphy.com/v1/gifs/search'
  const response = await axios.get<ApiResponse>(url, {
    params: {
      api_key: API_KEY,
      q: q,
      limit,
      offset
    },
  })
  return response.data
}
