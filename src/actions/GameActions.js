export function setParagraph(p_id) {

    return {
        type: 'SET_PARAGRAPH',
        p_id
    }
}

export function setEnemy({first_strike_is, enemy, round}) {

    return {
        type: 'SET_ENEMY',
        first_strike_is: first_strike_is,
        enemy: enemy,
        round: round
    }
}

export function fightRound(my_hits, enemy_hits, newRound) {

    return {
        type: 'FIGHT_ROUND',
        my_hits,
        enemy_hits,
        newRound
    }
}