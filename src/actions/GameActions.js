export function setParagraph(p_id) {

    return {
        type: 'SET_PARAGRAPH',
        p_id
    }
}

export function startBattle(battle) {
    return    {
        type: 'START_BATTLE',
        battle
    }
}

export function setQueue(battle, charQueue) {

    return {
        type: 'SET_QUEUE',
        battle,
        charQueue
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

export function kickEnemy( enemy_hits, newRound) {

    return {
        type: 'KICK',

        enemy_hits,
        newRound

    }
}