export function setParagraph(p_id) {

    return {
        type: 'SET_PARAGRAPH',
        p_id
    }
}

export function setEnemy({fight_queue, enemy, round}) {

    return {
        type: 'SET_ENEMY',
        fight_queue: fight_queue,
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