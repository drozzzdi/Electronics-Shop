const order=(state=[],action)=> {
    switch(action.type){
      case 'COMMISSION':
          return state=[action.payload,...state];
      default:
          return state;
      }
  }
  
  export default order;