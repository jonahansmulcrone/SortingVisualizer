import { useEffect, useState } from 'react';
import './Visualizer.css'

interface VisualizerProps {
  arraySize: number;
  onBeginSort: boolean;
  onSortingComplete: () => void;
}

const Visualizer: React.FC<VisualizerProps> = ({ arraySize, onBeginSort, onSortingComplete }) => {
  const [numsArray, setNumsArray] = useState<number[]>([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [comparisonIndex, setComparisonIndex] = useState<number | null>(null);
  const maxBarHeight = 700;

  const generateNumsArray = (arrayLength: number) => {
    const shuffledArray = Array.from({ length: arrayLength }, (_, i) => i);

    for (let k = shuffledArray.length - 1; k > 0; k--) {
      const randIndex = Math.floor(Math.random() * k);
      if (randIndex !== k) {
        [shuffledArray[k], shuffledArray[randIndex]] = [shuffledArray[randIndex], shuffledArray[k]];
      }
    }

    setNumsArray(shuffledArray);
  };

  const beginInsertionSort = () => {
    const arr = [...numsArray];
    let i = 1;
    let j: number | undefined;
    let key: number;

    const sortInterval = setInterval(() => {
      if (i < arr.length) {
        if (j === undefined) {
          key = arr[i];
          j = i - 1;
          setActiveIndex(i); 
        }

        if (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          setComparisonIndex(j);
          j--;
          setNumsArray([...arr]);
        } else {
          arr[j + 1] = key;
          setNumsArray([...arr]);
          setActiveIndex(i); 
          i++;
          j = undefined;
          setComparisonIndex(null); 
        }
      } else {
        clearInterval(sortInterval);
        setActiveIndex(null);
        setSortingInProgress(false);
        onSortingComplete();
      }
    }, 100); 
  };

  useEffect(() => {
    generateNumsArray(arraySize);
  }, [arraySize]);

  useEffect(() => {
    setSortingInProgress(onBeginSort);
  }, [onBeginSort]);

  useEffect(() => {
    if (sortingInProgress) {
      beginInsertionSort();
    }
  }, [sortingInProgress]);

  return (
    <div className="visualizer-container">
      {numsArray.map((val, index) => (
        <div
          className="array-bar"
          key={index}
          style={{
            height: `${(maxBarHeight / arraySize) * val}px`,
            width: `${100 / numsArray.length}%`,
            backgroundColor: index === activeIndex
              ? 'red'
              : index === comparisonIndex
              ? 'blue' 
              : 'white', 
          }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
