import { Map } from '../../../../src/index';
import Card from '../component/Card';
import { nationalPark } from '../constants/national-park';

const NationalPark = () => {
  const dataPoints = nationalPark.map(
    ({ coordinates, name, established, area }) => ({
      position: coordinates as unknown as [number, number],
      description: (
        <Card
          property={{
            name,
            description: `Established: ${established}, Area: ${area}`,
          }}
        />
      ),
    }),
  );

  return <Map center={[27.51682, 84.43829]} zoom={7} dataPoints={dataPoints} />;
};

export default NationalPark;
