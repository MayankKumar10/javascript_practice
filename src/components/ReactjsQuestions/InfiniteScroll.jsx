import React, { useEffect, useState } from 'react'

export const InfiniteScroll = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [limit, setLimit] = useState(10);
  
  let URL = 'https://jsonplaceholder.typicode.com/posts'

  const fetchData = async () => {
    let res = await fetch (URL)
    let result = await res.json()
    setDatas(result)
  }


  useEffect(()=>{
    fetchData()
  },[])


  console.log("datas", Array.isArray(datas))

  return (
    <div>
      <h4>InfiniteScroll</h4>
      {
        datas?.length > 0 && datas?.slice(0, limit).map((data, i)=>(
          <div key={data.id}>
            <h4>{data.id}</h4>
            <p>{data.title}</p>
          </div>
        ))
      }

    </div>
  )
}
