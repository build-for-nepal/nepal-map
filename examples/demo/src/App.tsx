import { Map } from '../../../src/index';
// import Description from './component/Description';
import ProvinceDetail from './component/ProvinceDetail';

import { provincesData } from './constants/province-data';
function App() {
  const dataPoints = provincesData.map(({ position, name, population }) => ({
    position: position as unknown as [number, number],
    description: <ProvinceDetail province={{ name, population }} />,
  }));
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Map
        center={[28.3949, 84.124]}
        zoom={7}
        // dataPoints={[
        //   { position: [27.7, 85.3], description: <Description /> },
        //   { position: [28.2, 83.9], description: 'Pokhara' },
        // ]}
        dataPoints={dataPoints}
      />
    </div>
  );
}

export default App;
