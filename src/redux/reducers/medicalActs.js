const init = {
    list: []
};
export const medical_acts = (state = init, action) => {
    switch (action.type) {
        case "SET_MEDICAL_ACTS": {
            return {
                ...state,
                list: action.payload.data
            }
        }
        default:
            return state
    }
}