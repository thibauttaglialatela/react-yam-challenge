import {useReducer, useState} from "react";
import YamsReducer from "../reducers/YamsReducer.jsx";

const initialState = {
    dice: [1, 1, 1, 1, 1]
};

const Yams = () => {
    const [state, dispatch] = useReducer(YamsReducer, initialState);
    const [count, setCount] = useState(0);

    function rollDice() {
        dispatch({ type: 'ROLL_DICE' });
        setCount(countThreeOfAKind(state.dice))
    }

    const countThreeOfAKind = (dice) => {
        const sortedDice = dice.slice().sort();
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (sortedDice[i] === 6 && sortedDice[i] === sortedDice[i + 1] && sortedDice[i] === sortedDice[i+2]) {
                count++;
            }
        }
        return count;
    }


    return (
        <div>
            {state.dice.map((die, index) => (
                <span key={index}>{die} </span>
            ))}
            <button onClick={rollDice}>Lancez les dés</button>
            <p>Nombre de brelans de 6: {count}</p>
        </div>
    )
}

export default Yams;
