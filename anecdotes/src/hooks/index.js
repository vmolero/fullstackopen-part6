import { useState } from 'react'
import axios from 'axios'

export const useField = type => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  const onReset = () => setValue('')

  return {
    type,
    value,
    onChange,
    onReset
  }
}

export const useResource = baseUrl => {
  const [resources, setResources] = useState([])

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    setResources(response.data)
  }

  const create = async payload => {
    await axios.post(baseUrl, payload)
    return await getAll()
  }

  const update = async blog => {
    await axios.put(baseUrl + '/' + blog.id, blog)
    return await getAll()
  }

  const deleteResource = async blog => {
    await axios.delete(baseUrl + '/' + blog.id)
    return await getAll()
  }

  const service = {
    getAll,
    create,
    delete: deleteResource,
    update
  }

  return [resources, service]
}
