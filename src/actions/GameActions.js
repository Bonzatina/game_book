export function setParagraph(p_id, battle_is_over) {

    return {
        type: 'SET_PARAGRAPH',
        p_id,
        battle_is_over
    }
}

export function startBattle(battle) {
    return    {
        type: 'START_BATTLE',
        battle
    }
}

export function setQueue(battle) {

    return {
        type: 'SET_QUEUE',
        battle
    }
}

export function getKick(nextStateOfBattle) {

    return {
        type: 'GET_KICK',
        nextStateOfBattle
    }
}

export function battleIsOver(my_hits, battle, battle_is_over) {

    return {
        type: 'BATTLE_IS_OVER',
        my_hits,
        battle,
        battle_is_over
    }
}

export function kickEnemy( enemy_hits, newRound) {

    return {
        type: 'KICK',

        enemy_hits,
        newRound

    }
}