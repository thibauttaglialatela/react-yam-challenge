const yamsReducer = (state, action) => {
    switch (action.type) {
        case 'ROLL_DICE':
            const newDice = Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1);
            return {...state, dice: newDice};
        default:
            return state;
    }
}

export default yamsReducer
