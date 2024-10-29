import { useState } from 'react';
import ProvincePopulation from './apps/ProvincePopulation';
import { BasicExample } from './apps/BasicExample';
import './App.css';

function App() {
  const [currentDemo, setCurrentDemo] = useState<string>('province-population');

  const renderDemo = () => {
    switch (currentDemo) {
      case 'province-population':
        return <ProvincePopulation />;
      case 'basic':
        return <BasicExample />;
      default:
        return <ProvincePopulation />;
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
        </ul>
      </aside>
      <main className="main-content">{renderDemo()}</main>
    </div>
  );
}

export default App;
