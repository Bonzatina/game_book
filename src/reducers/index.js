const initialState = {
    p_id: 1,
    first_strike_is: false,
    stats: {
        attack: 14,
        defence: 12,
        hits: 10,
        speed: 5
    }
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAGRAPH':
            return { ...state, p_id: action.p_id };

        case 'SET_ENEMY':
            return { ...state, enemy: action.enemy };

        default:
            return state;
    }
}
