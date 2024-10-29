import React from 'react';

type Props = {
  province: {
    name: string;
    population: string;
  };
};

const ProvinceDetail = ({ province }: Props) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{province.name}</h3>
      <p style={styles.population}>जनसंख्या: {province.population}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center' as const,
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    width: '150px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#333',
    margin: 0,
  },
  population: {
    fontSize: '14px',
    color: '#666',
    margin: '5px 0 0',
  },
};

export default ProvinceDetail;
