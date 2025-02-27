import { Map } from '../../../../src/index';
import Card from '../component/Card';
import { majorCitiesData } from '../constants/major-cities';

const MajorCities = () => {
  const dataPoints = majorCitiesData.map(
    ({
      position,
      name,
      population,
      image,
      attributionTitle,
      attributionUrl,
    }) => ({
      position: position as unknown as [number, number],
      description: (
        <Card
          property={{
            name,
            description: `Population: ${population}`,
            image,
            attributionTitle,
            attributionUrl,
          }}
        />
      ),
    }),
  );

  return <Map center={[28.3949, 84.124]} zoom={7} dataPoints={dataPoints} />;
};

export default MajorCities;
