import './Visualizer.css'

const Visualizer: React.FC = () => {
    const array = [15, 25, 90, 5, 14, 83, 63, 100, 1]

    return (
        <div className='visualizer-container'>
            {array.map((val) => (
                <div
                    className='array-bar'
                    style={{ height: `${val*6}px`, width: '20px'}}>
                </div>
            ))}
        </div>
    );
}

export default Visualizer