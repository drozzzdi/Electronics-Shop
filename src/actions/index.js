export const increment=(nr)=>{
    return{
        type:'INCREMENT',
        payload:nr
    }
}
export const decrement=(nr)=>{
    return{
        type:'DECREMENT',
        payload:nr
    }
}
export const active=(nr)=>{
    return{
        type:'ACTIVE',
        payload:nr
    }
}
export const commission=(nr)=>{
    return{
        type:'COMMISSION',
        payload:nr
    }
}

