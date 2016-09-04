const initialState = {
    p_id: 5,
    stats: {
        attack: 10,
        defence: 10,
        hits: 10,
        speed: 10
    }
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAGRAPH':
            return { ...state, p_id: action.p_id }

        default:
            return state;
    }
}
