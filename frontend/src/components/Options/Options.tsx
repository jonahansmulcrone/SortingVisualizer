import './Options.css'
import Slider from 'react-slider';

interface OptionsProps {
    arraySize: number;
    onArraySizeChange: (size: number) => void;
    onBeginSort: () => void;
}

const Options: React.FC<OptionsProps> = ({ arraySize, onArraySizeChange, onBeginSort }) => {

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onArraySizeChange(Number(e.target.value));
    }

    const handleBeginSort = () => {
        onBeginSort();
    };

    return (
        <div className='options-container'>
            <div className='algorithms-dropdown'>
                <label>Select an Algorithm</label>
                    <select name='algorithm' id='algorithm'>
                        <option value='insertion-sort'>Insertion Sort</option>
                        <option value='selection-sort'>Selection Sort</option>
                        <option value='quick-sort'>Quick Sort</option>
                    </select>
            </div>
            <div className='begin-sort-button'>
                <button onClick={handleBeginSort}>Begin Sorting!</button>
            </div>
            <div className='sliders-wrapper'>
            <label className='range-slider'>
                <input
                    type='range'
                    min='10'
                    max='150'
                    onChange={handleSliderChange} />
            </label>
            </div>
        </div>
    );
}

export default Options