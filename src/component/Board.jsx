import React,{useState} from 'react';
import Square from './Square';

const Board=()=>{
    const [state,setState]=useState(Array(9).fill(null));
    const [isXturn,setIsXturn]=useState(true);

    const handleClick = (index) => {
        if (state[index] !== null) return; // Prevent overwriting
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setIsXturn(!isXturn);
    }

    const checkWinner=()=>{
        const winningLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for (let logic of winningLogic){
            const [a,b,c]=logic;
            if(state[a]!=null && state[a]===state[b] && state[b]===state[c]){
                return state[a];
            }
            else{
                <h2>Next Player is : {isXturn? "X":"O"}</h2>
            }
        }
    }

        const isWinnwer=checkWinner();
        

    return(
        <div className='board-container'>
            {isWinnwer? <><h2>Winner is : {isWinnwer}</h2><br></br> <button onClick={()=>setState(Array(9).fill(null))}>Play Again</button> </> : 
            <>
            <h2>Next Player is : {isXturn? "X":"O"}</h2>
            <div className='board-row'>
                < Square onClick={()=>handleClick(0)} value={state[0]}/>
                < Square onClick={()=>handleClick(1)} value={state[1]}/>
                < Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className='board-row'>
                < Square onClick={()=>handleClick(3)} value={state[3]}/>
                < Square onClick={()=>handleClick(4)} value={state[4]}/>
                < Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className='board-row'>
                < Square onClick={()=>handleClick(6)} value={state[6]}/>
                < Square onClick={()=>handleClick(7)} value={state[7]}/>
                < Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div></>}
        </div>
    )
}

export default Board;