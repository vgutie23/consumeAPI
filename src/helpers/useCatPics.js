// Vanessa Gutierrez 03/28/2021
import { ref } from 'vue'
import axios from 'axios'

export const searchItem = ref('')

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search',
  params: {
    api_key: import.meta.env.VITE_APIKEY,
  },
})

const apiSingle = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/',
  params: {
    api_key: import.meta.env.VITE_APIKEY,
  },
})

export const cats = ref([])
export const cat = ref()

export const getCats = async () => {
  try {
    const resource = searchItem.value ? 'search' : ''
    const response = await api(resource, {
      params: { limit: 8, order: 'RANDOM', size: 'thumb' },
    })
    cats.value = response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCat = async id => {
  try {
    const response = await apiSingle(id)
    console.log(response)
    cat.value = response.data
  } catch (error) {
    console.log(error)
  }
}

export const clearCatPic = () => (cat.value = null)
