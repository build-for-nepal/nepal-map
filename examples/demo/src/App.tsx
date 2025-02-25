import { useState } from 'react';
import ProvincePopulation from './apps/ProvincePopulation';
import { BasicExample } from './apps/BasicExample';
import './App.css';
import TouristDestination from './apps/TouristDestination';
import MountainOver8000 from './apps/MountainOver8000';
import MajorCities from './apps/MajorCities';
import NationalPark from './apps/NationalPark';

function App() {
  const [currentDemo, setCurrentDemo] = useState<string>('basic');

  const renderDemo = () => {
    switch (currentDemo) {
      case 'basic':
        return <BasicExample />;
      case 'province-population':
        return <ProvincePopulation />;
      case 'tourist-destination':
        return <TouristDestination />;
      case 'mountain-over-8000':
        return <MountainOver8000 />;
      case 'major-cities':
        return <MajorCities />;
      case 'national-park':
        return <NationalPark />;
      default:
        return <BasicExample />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h3>Demo Examples</h3>
        <ul>
          <li
            onClick={() => setCurrentDemo('basic')}
            className={currentDemo === 'basic' ? 'active' : ''}
          >
            Basic
          </li>
          <li
            onClick={() => setCurrentDemo('province-population')}
            className={currentDemo === 'province-population' ? 'active' : ''}
          >
            Province Population
          </li>
          <li
            onClick={() => setCurrentDemo('tourist-destination')}
            className={currentDemo === 'tourist-destination' ? 'active' : ''}
          >
            Tourist Destination
          </li>
          <li
            onClick={() => setCurrentDemo('mountain-over-8000')}
            className={currentDemo === 'mountain-over-8000' ? 'active' : ''}
          >
            Mountains Over 8000m
          </li>
          <li
            onClick={() => setCurrentDemo('major-cities')}
            className={currentDemo === 'major-cities' ? 'active' : ''}
          >
            Major Cities
          </li>
          <li
            onClick={() => setCurrentDemo('national-park')}
            className={currentDemo === 'national-park' ? 'active' : ''}
          >
            National Park
          </li>
        </ul>
      </aside>
      <main className="main-content">{renderDemo()}</main>
    </div>
  );
}

export default App;
