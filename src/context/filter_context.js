import { createContext,useContext } from "react";
import { useProductContext } from "./productcontext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filterReducer";

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}
export const FilterContextProvider=({children})=>{
    const {products}=useProductContext(); 
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const setGridView=()=>{
        return dispatch({type:"SET_GRIDVIEW"});
    }
    const setListView=()=>{
        return dispatch({type:"SET_LISTVIEW"});
    }

    const sorting=()=>{
         dispatch({type:"GET_SORT_VALUE"});
    }
    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
    }, [products]);
    useEffect(() => {
      dispatch({type:"SORTING_PRODUCTS",payload:products});
    },[state.sorting_value])

    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"})
    },[state.filters]);


    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}});
    }
   return  <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue}}>{children}</FilterContext.Provider>
}
export const useFilterContext=()=>{
    return useContext(FilterContext);
}