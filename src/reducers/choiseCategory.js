const choiseCategory=(state=0,action)=>{
    switch(action.type){
        case 'ACTIVE':
            return state=action.payload;
        default:
            return state=0;
    }
}
export default choiseCategory;