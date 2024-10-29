import { Map } from '../../../../src/index';
import ProvinceDetail from '../component/ProvinceDetail';
import { provincesData } from '../constants/province-data';

const ProvincePopulation = () => {
  const dataPoints = provincesData.map(({ position, name, population }) => ({
    position: position as unknown as [number, number],
    description: <ProvinceDetail province={{ name, population }} />,
  }));

  return <Map center={[28.3949, 84.124]} zoom={7} dataPoints={dataPoints} />;
};

export default ProvincePopulation;
