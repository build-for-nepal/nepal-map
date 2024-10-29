import { Map } from '../../../src/index';
import Description from './component/Description';
function App() {
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
        dataPoints={[
          { position: [27.7, 85.3], description: <Description /> },
          { position: [28.2, 83.9], description: 'Pokhara' },
        ]}
      />
    </div>
  );
}

export default App;
