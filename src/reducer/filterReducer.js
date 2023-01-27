const filterReducer=(state,action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS": 
        let priceArr=action.payload.map((currElem)=>currElem.price);
        let maxPrice=Math.max(...priceArr);
        let minPrice=Math.min(...priceArr);
           return {
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload],
            filters: { ...state.filters, maxPrice,minPrice, price: maxPrice }
           }
           case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view:true
            }
            case "SET_LISTVIEW":
                return {
                    ...state,
                    grid_view:false
                }
           case "GET_SORT_VALUE":
            let userSortValue=document.getElementById("sort");
            let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
            
            return {
              ...state,
              sorting_value:sort_value,
           }  
           
           case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct=[...action.payload]
            if(state.sorting_value ==="a-z"){
                newSortData=tempSortProduct.sort((a,b)=>{
                    return a.title.localeCompare(b.title);
                })
            }

            if(state.sorting_value ==="z-a"){
                newSortData=tempSortProduct.sort((a,b)=>{
                    return b.title.localeCompare(a.title);
                })
            }
            
            if(state.sorting_value ==="lowest"){
                const sortingProducts=(a,b)=>{
                    return a.price-b.price;
                }
                newSortData=tempSortProduct.sort(sortingProducts);
            }

            if(state.sorting_value ==="highest"){
                const sortingProducts=(a,b)=>{
                    return b.price-a.price;
                }
                newSortData=tempSortProduct.sort(sortingProducts);
            }

            return{
                ...state,
                filter_products:newSortData,
            }

            case  "UPDATE_FILTER_VALUE" :
                const {name,value}=action.payload;
                return{
                ...state,
                filters:
                {
                    ...state.filters,
                    [name]:value
                }
            }
            case "FILTER_PRODUCTS":
                let {all_products}=state;
                let tempFilterProduct=[...all_products];
                const {text,category,price}=state.filters;
                if(text){
                    tempFilterProduct=tempFilterProduct.filter((currElem)=>{
                        return currElem.title.toLowerCase().includes(text);
                    })
                }
                if(category!=="All"){
                    tempFilterProduct=tempFilterProduct.filter((currElem)=>{              
                            return currElem.category===category                       
                    })
                }
                if (price){
                    tempFilterProduct=tempFilterProduct.filter((currElem)=>{
                        return currElem.price<=price
                    })
                }
                else if(price===0){
                    tempFilterProduct=tempFilterProduct.filter((currElem)=>{
                        return currElem.price===price
                    });
                }
                return {
                    ...state,
                    filter_products: tempFilterProduct
                }

        default: 
            return state;
    }
}
export default filterReducer;
