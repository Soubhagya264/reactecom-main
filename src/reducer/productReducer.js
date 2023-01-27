const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_API_DATA":
            const category = [];
            var featuredData = [];
            var count=0;
            action.payload.map((data) => {
                if (!category.includes(data.category) && count!==3) {
                    category.push(data.category);
                    featuredData.push(data);
                    count++;
                }
            })
            return {
                ...state, isLoading: false, products: action.payload,
                featureProducts: featuredData
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_SINGLE_LOADING":
                return {
                    ...state,
                    isSingleLoading: true
            }  
        case "SET_SINGLE_PRODUCT":{
            return {
                ...state,
                isSingleLoading: false,
                Singleproduct: action.payload
        }  
        } 
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }     

            
        default:
            return state;
    }







}

export default ProductReducer;