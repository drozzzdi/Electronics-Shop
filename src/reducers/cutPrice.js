const cutPrice=(state='true',action)=>{
    switch(action.type){
        case 'SALLE':
            return state=action.type;
        default:
            return state;
    }
}
export default cutPrice;