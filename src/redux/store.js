import { createStore } from "redux";
import Productreducer from "./reducer/Productreducer";
import { composeWithDevTools } from '@redux-devtools/extension';



const store = createStore(Productreducer,composeWithDevTools())

export default store