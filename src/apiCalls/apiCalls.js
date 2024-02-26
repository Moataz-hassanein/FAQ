import axios from "axios"

 export const fetchData = async (setData) => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts")
    setData(result.data)
  }
