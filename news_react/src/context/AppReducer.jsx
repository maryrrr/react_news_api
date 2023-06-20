const docs = (state, action) => {
    switch (action.type) {
        case "GET_DOCS":
            return {
                ...state,
                docs: action.payload,
            };
            default:
                return state;
            }
        };

export default docs;