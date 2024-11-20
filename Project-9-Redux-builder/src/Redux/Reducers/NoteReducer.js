let initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
        : []
}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let old = [...state.user,action.payload]
            localStorage.setItem('user', JSON.stringify(old))
        return{
            ...state,
            user:old
        }
        
        case 'DELETE_USER':
            let deleteId = action.payload
            let remove = state.user.filter((user) => user.id !== deleteId)
            localStorage.setItem('user', JSON.stringify(remove))
            alert("not delete...")
            return{
                ...state,
                user:remove
            }
            default :
            return state

    }
}
export default notesReducer;