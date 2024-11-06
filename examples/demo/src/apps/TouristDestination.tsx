import { Map } from '../../../../src/index';
import TouristDestinationDetail from '../component/TouristDestinationDetail';
import { touristDestinations } from '../constants/tourist-destination';

const TouristDestination = () => {
  const dataPoints = touristDestinations.map(
    ({ position, name, description }) => ({
      position: position as unknown as [number, number],
      description: (
        <TouristDestinationDetail destination={{ name, description }} />
      ),
    }),
  );

  return <Map center={[28.3949, 84.124]} zoom={7} dataPoints={dataPoints} />;
};

export default TouristDestination;