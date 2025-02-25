import { Province } from '../../../../src/index';
import Card from '../component/Card';
import { provincesData } from '../constants/province-data';

const ProvincePopulation = () => {
  const dataPoints = provincesData.map(({ position, name, population }) => ({
    position: position as unknown as [number, number],
    description: (
      <Card property={{ name, description: `जनसंख्या: ${population}` }} />
    ),
  }));

  return (
    <Province center={[28.3949, 84.124]} zoom={7} dataPoints={dataPoints} />
  );
};

export default ProvincePopulation;
