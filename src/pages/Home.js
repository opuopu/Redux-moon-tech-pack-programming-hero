import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
const Home = () => {
  const [products,setproduct] = useState([])

  useEffect(()=>{
fetch('https://json.extendsclass.com/bin/8cd8c2fa8178')
.then((res)=>res.json())
.then((data)=>setproduct(data))


  },[])


  const state= useSelector(state => state.cart)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

    {
      products?.map((product)=><ProductCard product={product}/>
      )
    }
    </div>
  );
};

export default Home;
