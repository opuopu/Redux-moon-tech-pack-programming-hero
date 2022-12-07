import { useDispatch, useSelector } from "react-redux";
import { BiListPlus } from "react-icons/bi";
import { removeToCart } from "../redux/ACtion";


export const RemoveCard = ({product}) =>{

 const dispatch = useDispatch()

 const RemoveFromCart = (value) =>{
    dispatch(removeToCart(value))
 }
    
return(
    <div
    className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
    // key={product._id}
  >
    <div className='h-52 w-52 mx-auto'>
      <img src={product.image} alt={product.model} />
    </div>
    <h1 className='font-bold text-center'>{product.model}</h1>
    <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
    <div className=' flex-1'>
      <ul className='space-y-2'>
        {product?.keyFeature.map((feature) => {
          return <li className='text-sm '>{feature}</li>;
        })}
      </ul>
    </div>
    <div className='flex gap-2 mt-5'>
      <button onClick={()=>RemoveFromCart(product)}  className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
       remove to cart
      </button>
      <button
        title='Add to wishlist'
        className='bg-indigo-500 flex flex-row  py-1 px-2 rounded-full'
      >
        <BiListPlus className='text-white' />
      <p className="text-white mx-1">{product?.quantity}</p>
      </button>
    </div>
  </div>

)


}