import { ADD_TO_CART, REMOVE_TO_CART } from "../ActionCreator"

const initialstate ={
  cart:[]

}


const Productreducer =(state=initialstate,action) =>{
    const SelectedProduct = state.cart.find(product=>product._id ===action.payload._id)
   
  
switch(action.type){
    case ADD_TO_CART:
        if(SelectedProduct){
            SelectedProduct.quantity = SelectedProduct.quantity +1
                return {
                    ...state,
                    cart: state.cart.filter(product => product._id !== SelectedProduct._Id)
                }
            }
        
        return{
            ...state,
            cart:[...state.cart,{...action.payload,quantity:1}]

        }
case REMOVE_TO_CART:
    
    if(SelectedProduct.quantity >1){
        SelectedProduct.quantity = SelectedProduct.quantity -1;
            return {
                ...state,
                cart:[...state.cart]
            }
        }
    
   
    return{
        ...state,
        cart: state.cart.filter(product => product._id !==action.payload._id)
    }

        default:
            return state
}
}



export default Productreducer
