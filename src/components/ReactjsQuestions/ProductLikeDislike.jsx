import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, fetchProducts, like } from '../../redux/productsSlice'

export const ProductLikeDislike = () => {
  const products = useSelector((state)=> state?.products?.products)
  const status = useSelector((state)=> state.products.status)
  const error = useSelector((state)=> state.products.error)
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const onLike = (id) =>{
    dispatch(like({id: id}))
  }

  const onDislike = (id) =>{
    dispatch(dislike({id: id}))
  }


  console.log("products",{products, status, error})

  let MathArr = Math.ceil(products.length / limit)

  return (
    <div>
      {products.length > 0 && products.slice(page * limit - limit, page * limit).map((product)=>(
        <div key={product.id}>
          <h4>{product.id}</h4>
          <p>{product.title}</p>
          <button onClick={()=> onLike(product.id)}>like {product.like}</button>
          <button onClick={()=> onDislike(product.id)}>dislike {product.dislike}</button>
        </div>
      ))
      }

      <div style={{cursor: "pointer"}}>
        {page > 1 && <span onClick={()=>setPage(page-1)}>◀️</span>}
        {[...Array(MathArr)].map((_, i)=> <span key={i+1} onClick={()=> setPage(i+1)}>{i+1}</span> )}
        {MathArr > page && <span onClick={()=>setPage(page+1)}>▶️</span>}
      </div>
    </div>
  )
}
