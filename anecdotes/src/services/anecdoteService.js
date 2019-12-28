import axios from 'axios'

function anecdoteService() {
  const baseUrl = 'http://localhost:3001/anecdotes'

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

  const create = async payload => {
    const response = await axios.post(baseUrl, payload)
    return response.data
  }

  return {
    getAll,
    create
  }
}

export default anecdoteService()
