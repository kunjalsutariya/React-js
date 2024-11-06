let initialState = 0;

const conuter = (state = initialState, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;

        default:
            return state;    
    }
}
export default conuter;