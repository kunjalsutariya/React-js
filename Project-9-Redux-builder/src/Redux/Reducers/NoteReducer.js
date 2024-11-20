let initialState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users'))
        : []
}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let old = [...state.users,action.payload]
            localStorage.setItem('users', JSON.stringify(old))
        return{
            ...state,
            users:old
        }
        
        case 'DELETE_USER':
            let deleteId = action.payload
            let remove = state.users.filter((user) => user.id !== deleteId)
            localStorage.setItem('users', JSON.stringify(remove))
            alert("not delete...")
            return{
                ...state,
                users:remove
            }
            default :
            return state

    }
}
export default notesReducer;