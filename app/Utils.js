module.exports = {
    createReducer(initialState, handlers) {
        return (state, action) => {
            if(!state) {
                state = initialState;
            }

            if(handlers[action.type]) {
                return handlers[action.type](state, action);
            }

            return state;
        }
    }
}
