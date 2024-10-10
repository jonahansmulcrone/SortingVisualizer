import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
    return (
        <header className='header-container'>
            <div className='header-left'>
                <div className='header-title'>
                    Sorting Visualizer
                </div>
            </div>
            <div className='header-left'>
                <div className='header-left-content'>
                </div>
                    <div className='github-icon'>
                        <a href='https://github.com/jonahansmulcrone/SortingVisualizer'><FontAwesomeIcon icon={faGithub} size='2x' style={{ color: 'white' }}/></a>
                    </div>
            </div>
        </header>
    );
}

export default Header