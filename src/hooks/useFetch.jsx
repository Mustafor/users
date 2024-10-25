import { useEffect, useState } from "react"

export const useFetch = (URL) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com${URL}`).then(res => res.json()).then(data =>{
            setData(data)
        })
    }, [])
    return data
}