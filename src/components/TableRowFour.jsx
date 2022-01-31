import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFourthDragAndDrop, setFourthPinMode} from '../redux/actions/ditonActions';

function TableRowFour() {
    let dispatch = useDispatch();
    const [table] = useState(useSelector((state) => state.fourthTable))
    const [startDrag, setStartDarg] = useState({rowBlokIndex: null, columnBlokIndex: null, itemIndex: null, color:""});
    const head = ["OCT", "NOV", "DEC"];
    const [onPin, setOnPin] = useState(["passive", "passive", "passive", "passive", "passive", "passive"])

    const handleStart = (e, rowBlokIndex, columnBlokIndex, itemIndex, color) => {
        setStartDarg({rowBlokIndex: rowBlokIndex, columnBlokIndex: columnBlokIndex, itemIndex: itemIndex, color: color})
    }

const handleDrop = (e, rowBlokIndex, columnBlokIndex, itemIndex, color) => {
    if((startDrag.rowBlokIndex === rowBlokIndex) && (startDrag.columnBlokIndex === columnBlokIndex)){
        const swap = {
            firstBox: [rowBlokIndex, columnBlokIndex, itemIndex, color],
            secondBox: [startDrag.rowBlokIndex, startDrag.columnBlokIndex, startDrag.itemIndex, startDrag.color]
        }
        dispatch(setFourthDragAndDrop(swap));
        setStartDarg({rowBlokIndex: null, columnBlokIndex: null, itemIndex: null, color:""})
    }
}

const handlePin = (row, pin, pinIndex) => {
    let pins = [...onPin]
    pins[pinIndex] = pins[pinIndex] === "passive" ? "active" : "passive"
    let cloneTable = [...table]
    if(pins[pinIndex] === "active"){
        for (let index = 0; index < cloneTable[row].length; index++) {
            cloneTable[row][index][pin] = cloneTable[row][index][pin] + " active"
        }
    }else{
        for (let index = 0; index < cloneTable[row].length; index++) {
            cloneTable[row][index][pin] = cloneTable[row][index][pin].replace(" active", "")
        }
    }
    let index = [row, pin, cloneTable]
    dispatch(setFourthPinMode(index))
    setOnPin([...pins])
}
  return (
      <div className='table table-four'>
            <div className='table__header'>
                {
                    head.map((item, index) => (
                        <div className='table__header-item' key={index}>
                            <div className='row-count'>Q4</div>
                            <div className='month'>{item}</div>
                        </div>
                    ))
                }
            </div>
            <div className='table__container'>
                <table className='table__content'>
                {
                    table.map((blok, index) => (
                        <tbody className='table__column' key={index}>
                            {
                                blok.map((row, rowIndex) => (
                                    <tr className="table__row" key={rowIndex}>
                                        <td onDragOver={(e)=>e.preventDefault()} onDrop={(e)=> handleDrop(e, index, rowIndex, 0, row[0])} onDragStart={(e)=>handleStart(e, index, rowIndex, 0, row[0])} draggable="true" className={`table-color-${row[0]}`}></td>
                                        <td onDragOver={(e)=>e.preventDefault()} onDrop={(e)=> handleDrop(e, index, rowIndex, 1, row[1])} onDragStart={(e)=>handleStart(e, index, rowIndex, 1, row[1])} draggable="true" className={`table-color-${row[1]}`}></td>
                                        <td onDragOver={(e)=>e.preventDefault()} onDrop={(e)=> handleDrop(e, index, rowIndex, 2, row[2])} onDragStart={(e)=>handleStart(e, index, rowIndex, 2, row[2])} draggable="true" className={`table-color-${row[2]}`}></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    ))
                }
            </table>
            <div className='table__pin'>
                    <div className='table__pin-group'>
                        <button onClick={()=>handlePin(0, 0, 0)}><i className={`fas fa-thumbtack ${onPin[0]}`}></i></button>
                        <button onClick={()=>handlePin(0, 1, 1)}><i className={`fas fa-thumbtack ${onPin[1]}`}></i></button>
                        <button onClick={()=>handlePin(0, 2, 2)}><i className={`fas fa-thumbtack ${onPin[2]}`}></i></button>
                    </div>
                    <div className='table__pin-group'>
                        <button onClick={()=>handlePin(1, 0, 3)}><i className={`fas fa-thumbtack ${onPin[3]}`}></i></button>
                        <button onClick={()=>handlePin(1, 1, 4)}><i className={`fas fa-thumbtack ${onPin[4]}`}></i></button>
                        <button onClick={()=>handlePin(1, 2, 5)}><i className={`fas fa-thumbtack ${onPin[5]}`}></i></button>
                    </div>
                </div>
            </div>
      </div>
  )
}
export default TableRowFour;