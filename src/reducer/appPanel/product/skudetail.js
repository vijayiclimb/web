export default(skuDetail={},action)=>{
    switch(action.type){
        case 'FETCHSKUDETAIL':
            return action.payload
        default :
            return skuDetail
    }
}