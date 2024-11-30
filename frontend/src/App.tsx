import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Visualizer from './components/Visualizer/Visualizer'
import Options from './components/Options/Options'

const App: React.FC = () => {
  const [arraySize, setArraySize] = useState<number>(10)
  const [sortingSpeed, setSortingSpeed] = useState<number>(2)
  const [sortingInProgress, setSortingInProgress] = useState(false);

  const handleArraySizeChange = (size: number) => {
    setArraySize(size);
  };

  const handleSortingSpeedChange = (speed: number) => {
    setSortingSpeed(speed);
  };

  const handleBeginSort = () => {
    console.log("Handle begin sort")
    setSortingInProgress(true)
  };

  const handleSortingComplete = () => {
    setSortingInProgress(false);
  }

  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <Options arraySize={arraySize} onArraySizeChange={handleArraySizeChange} onBeginSort={handleBeginSort} onSpeedChange={handleSortingSpeedChange} />
        <Visualizer arraySize={arraySize} onBeginSort={sortingInProgress} onSortingComplete={handleSortingComplete}/>
      </div>
    </div>
  )
}

export default App
