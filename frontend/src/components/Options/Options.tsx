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