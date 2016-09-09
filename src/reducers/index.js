const initialState = {
    p_id: 6,

    stats: {
        attack: 8,
        defence: 15,
        hits: 14,
        speed: 10,
        fight_queue: false,
        name: 'Bony'
    }
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAGRAPH':
            return { ...state, p_id: action.p_id };

        case 'SET_ENEMY':
            return Object.assign({}, state, {stats: {...state.stats, fight_queue: action.fight_queue}, enemy: action.enemy, round:action.round, first_strike_is: true}) ;

        case 'FIGHT_ROUND':
            return  Object.assign({}, state, {stats: {...state.stats, hits: action.my_hits}, enemy: {...state.enemy, hits: action.enemy_hits}, round: action.newRound}) ;

        case 'KICK':
            return  Object.assign({}, state, {enemy: [...state.enemy,  {enemy : {...state.enemy[0], hits: action.enemy_hits}}], round: action.newRound}) ;

        default:
            return state;
    }
}
