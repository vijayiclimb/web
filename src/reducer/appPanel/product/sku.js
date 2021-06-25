export default(sku=[],action)=>{
    switch(action.type){
        case 'FETCHSKU':
            return action.payload
        default :
            return sku
    }
}