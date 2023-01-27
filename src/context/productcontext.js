import { createContext,useContext } from "react";
import axios from "axios";
import { useEffect,useReducer } from "react";
import reducer from "../reducer/productReducer";


const AppContext=createContext();


const API="https://fakestoreapi.com/products";


const initialState={
  isLoading:false,
  isError:false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  Singleproduct:{},
}
const AppProvider=({children})=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
          const res = await axios.get(url);
          const products = await res.data;
          console.log(
            "🚀 ~ file: productcontex.js ~ line 32 ~ getProducts ~ products",
            products
          );

          dispatch({type:"SET_API_DATA", payload: products});
        } catch (error) {
          dispatch({type:"API_ERROR"});
        }
      };
    useEffect(() => {        
            getProducts(API);       
    }, [])
    const getSingleProduct =async (url)=>{
      try{
        dispatch({type:"SET_SINGLE_LOADING"});
        
        const res = await axios.get(url);
        
        const Singleproduct = await res.data;
        dispatch({type:"SET_SINGLE_PRODUCT", payload: Singleproduct});
      }catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"});
      }
    }
  return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>;
}
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,useProductContext};

