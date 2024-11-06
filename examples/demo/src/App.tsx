import { useState } from 'react';
import ProvincePopulation from './apps/ProvincePopulation';
import { BasicExample } from './apps/BasicExample';
import './App.css';
import TouristDestination from './apps/TouristDestination';

function App() {
  const [currentDemo, setCurrentDemo] = useState<string>('province-population');

  const renderDemo = () => {
    switch (currentDemo) {
      case 'province-population':
        return <ProvincePopulation />;
      case 'tourist-destination':
        return <TouristDestination />;
      case 'basic':
        return <BasicExample />;
      default:
        return <BasicExample />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h3>Demo Examples</h3>
        <ul>
          <li onClick={() => setCurrentDemo('basic')}>Basic</li>
          <li onClick={() => setCurrentDemo('province-population')}>
            Province Population
          </li>
          <li onClick={() => setCurrentDemo('tourist-destination')}>
            Tourist Destination
          </li>
        </ul>
      </aside>
      <main className="main-content">{renderDemo()}</main>
    </div>
  );
}

export default App;
