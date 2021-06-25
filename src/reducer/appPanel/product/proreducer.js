

export default(product=[],action)=>{
    switch(action.type){
        case "FETCHPRODUCT": 
         return action.payload;
        default:
            return product
    }
}