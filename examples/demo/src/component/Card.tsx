import React from 'react';

type Props = {
  property: {
    name: string;
    description: string;
    image?: string;
    attributionTitle?: string;
    attributionUrl?: string;
  };
};

function handleIconClick(attributionUrl: string | undefined) {
  if (attributionUrl) {
    window.open(attributionUrl);
  }
}

const Card = ({ property }: Props) => {
  const { description, name, attributionTitle, attributionUrl, image } =
    property;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.desc}>{description}</p>
      {image && (
        <div style={styles.iconParent}>
          <img style={styles.image} src={image} alt={name} />

          {attributionTitle && attributionUrl && (
            <img
              onClick={() => handleIconClick(attributionUrl)}
              title={attributionTitle}
              style={styles.icon}
              src="/icons/info.svg"
            />
          )}
        </div>
      )}
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
  desc: {
    fontSize: '14px',
    color: '#666',
    margin: '5px 0 0',
  },
  image: {
    width: '100%',
    borderRadius: 8,
  },
  iconParent: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 2,
    right: 4,
    height: 12,
    width: 12,
  },
};

export default Card;
