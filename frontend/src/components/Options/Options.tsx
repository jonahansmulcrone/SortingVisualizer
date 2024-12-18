import './Options.css'
import Slider from 'react-slider';

interface OptionsProps {
    arraySize: number;
    onArraySizeChange: (size: number) => void;
    onBeginSort: () => void;
    onSpeedChange: (speed: number) => void;
}

const Options: React.FC<OptionsProps> = ({ arraySize, onArraySizeChange, onBeginSort, onSpeedChange }) => {

    const SPEED_MULTIPLYER = 100;

    const handleSizeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onArraySizeChange(Number(e.target.value));
    }

    const handleSpeedSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        onSpeedChange(Math.abs((Number(e.target.value) * SPEED_MULTIPLYER) - 1000));
    }

    const handleBeginSort = () => {
        onBeginSort();
    };

    return (
        <div className='options-container'>
            <div className='algorithms-dropdown'>
                <select name='algorithm' id='algorithm'>
                    <option value="select">-- Select Algorithm --</option>
                    <option value='insertion-sort'>Insertion Sort</option>
                    <option value='bubble-sort'>Bubble Sort</option>
                    <option value='selection-sort'>Selection Sort</option>
                    <option value='quick-sort'>Quick Sort</option>
                </select>
            </div>
            <div className='sliders-wrapper'>
                <div style={{ fontFamily: 'Courier New' }}>
                    Array Size
                </div>
                <label className='range-slider'>
                    <input
                        type='range'
                        min='10'
                        max='150'
                        onChange={handleSizeSliderChange} />
                </label>
            </div>
            <div className='sliders-wrapper'>
                <div style={{ fontFamily: 'Courier New' }}>
                    Sorting Speed
                </div>
                <label className='range-slider'>
                    <input
                        type='range'
                        min='1'
                        max='10'
                        onChange={handleSpeedSliderChange} />
                </label>
            </div>
            
            <div className='begin-sort-button'>
                <button onClick={handleBeginSort}>Begin Sorting!</button>
            </div>
        </div>
    );
}

export default Options