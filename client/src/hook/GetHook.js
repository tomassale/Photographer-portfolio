import { useEffect, useState } from 'react'
import axios from 'axios'

const GetHook = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        console.log(response)
        if(response){
          setData(response.data)
        } else {
          return null
        }
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [url])

  return { data, error }
}

export default GetHook