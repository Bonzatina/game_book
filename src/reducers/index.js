

const initialState = {
    p_id: 0,

    stats: {
        attack: 18,
        defence: 5,
        hits: 14,
        speed: 10,
        fight_queue: false,
        name: 'Bony'
    }
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAGRAPH':
            return { ...state, p_id: action.p_id,  battle_is_over: action.battle_is_over};

        case 'START_BATTLE':
            return  Object.assign({}, state, {battle: action.battle});

        case 'SET_QUEUE':
            return Object.assign({}, state, {battle: action.battle}) ;

        case 'GET_KICK':
            return Object.assign({}, state, {battle: action.nextStateOfBattle}) ;

        case 'BATTLE_IS_OVER':
            return Object.assign({}, state, {battle: action.battle}, {stats: {...state.stats, hits: action.my_hits}}, {battle_is_over: action.battle_is_over}) ;

        case 'FIGHT_ROUND':
            return  Object.assign({}, state, {stats: {...state.stats, hits: action.my_hits}, enemy: {...state.enemy, hits: action.enemy_hits}, round: action.newRound}) ;

        case 'KICK':
            return  Object.assign({}, state, {enemy: action.enemy_hits, round: action.newRound}) ;

        default:
            return state;
    }
}
