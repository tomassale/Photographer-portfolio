import { useEffect, useState } from 'react'
import axios from 'axios'

const GetHook = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        console.log(response)
        if(response){
          setData(response.data)
          setLoading(false)
        } else {
          return null
        }
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default GetHook