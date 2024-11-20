export const Add = (data) =>{
    return{
        type:'adddata',
        payload:data
    }
}
export const Delete = (id) =>{
    return{
        type:'delete',
        payload:id
    }
}