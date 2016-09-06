const initialState = {
    p_id: 5,
    first_strike_is: false,
    stats: {
        attack: 8,
        defence: 15,
        hits: 14,
        speed: 10
    }
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAGRAPH':
            return { ...state, p_id: action.p_id };

        case 'SET_ENEMY':
            return Object.assign({}, state, {first_strike_is: action.first_strike_is, enemy: action.enemy, round:action.round}) ;

        case 'FIGHT_ROUND':
            return  Object.assign({}, state, {stats: {...state.stats, hits: action.my_hits}, enemy: {...state.enemy, hits: action.enemy_hits}, round: action.newRound}) ;

        default:
            return state;
    }
}
