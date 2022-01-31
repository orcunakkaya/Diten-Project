import * as actionTypes from '../actions/actionTypes';

const initialState = [
    [
    ["blue", "orange", "blue"], ["blue", "blue", "blue"], ["blue", "blue", "blue"],["blue", "blue", "blue"], 
    ["blue", "blue", "blue"], ["blue", "blue", "blue"], ["blue", "blue", "blue"], ["blue", "blue", "blue"],
    ["gray", "gray", "gray"], ["gray", "gray", "gray"], ["gray", "gray", "gray"],["gray", "gray", "gray"]
    ],
    [["orange", "blue", "orange"], ["gray", "orange", "orange"], ["orange", "orange", "orange"],["orange", "orange", "orange"], 
    ["orange", "orange", "orange"], ["orange", "orange", "orange"], ["orange", "gray", "orange"], ["orange", "orange", "orange"],
    ["gray", "gray", "gray"], ["gray", "gray", "gray"], ["gray", "gray", "blue"],["gray", "blue", "gray"]]
]
   

const fourthTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TABLE_FOURTH_DRAG_AND_DROP:
            let firstBox = action.payload.firstBox
            let secondBox = action.payload.secondBox
            state[firstBox[0]][firstBox[1]][firstBox[2]] = secondBox[3]
            state[secondBox[0]][secondBox[1]][secondBox[2]] = firstBox[3]
            return (
                state[firstBox[0]][firstBox[1]][firstBox[2]] = secondBox[3],
                state[secondBox[0]][secondBox[1]][secondBox[2]] = firstBox[3]
                ,state
            )
        case actionTypes.TABLE_FOURTH_PIN:
            return (
                state = action.payload[2],
                state
            )
            
        default:
            return state;
    }
}

export default fourthTableReducer;