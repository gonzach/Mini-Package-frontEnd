const initialState = {
    booking: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "CREATE_BOOKING:
            return {
                ...state,
                todos: [...state.todos, payload]
            };
    }
}

