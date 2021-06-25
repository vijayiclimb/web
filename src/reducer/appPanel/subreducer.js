export default (sub=[],action)=>{
    switch(action.type){
        case 'FETCHSUB':
            return action.payload
        default:
            return sub
    }
}