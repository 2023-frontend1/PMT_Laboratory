import axios from 'axios'
const fetchDataIncludingMarkdown = async () => {
  const response = await axios.get(import.meta.env.VITE_APP_API_URL)
  console.log(response.data)
  return response.data
}

export default fetchDataIncludingMarkdown
