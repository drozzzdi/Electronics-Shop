const order=(state=[],action)=> {

    switch(action.type){
        case 'COMMISSION':
            return state=[action.payload,...state];
        case 'UNCOMMIS':
            return state.splice(state.indexOf(action.payload),1),state;
        case 'CANCEL':
            return state.filter(element=>element!=action.payload);
        default:
          return state;
      }
     
  }
  
  export default order;