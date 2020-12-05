const React = require('react');

const styles = {
  card: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '800px',
    overflow: 'hidden',
    display: 'flex'
  },
  aside: {
    paddingLeft: '10px'
  },
  a: {
    color: '#000'
  },
  img: {
    margin: 0,
    width: '500px',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    margin: 0,
    padding: '5px 5px 0 5px',
    fontSize: '1.8rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  price: {
    margin: 0,
    padding: '5px 5px 0 5px',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#555',
    display: 'flex',
    gap: '5px'
  },
  p: {
    margin: 0,
    padding: '5px',
    fontSize: '1.2rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  stock: {
    margin: 0,
    padding: '5px',
    fontSize: '1.5rem'
  }
};

class Show extends React.Component {
  render () {
    const product = this.props.product;
    const index = this.props.index;

    styles.stock.color = product.quantity > 0 ? '#2B2' : '#E33';

    return (
      <div key={index} style={styles.card}>
        <div style={{ ...styles.img, backgroundImage: `url(${product.image})` }} />
        <div style={styles.aside}>
          <h3 style={styles.title}>
            {product.name}
          </h3>
          <hr />
          <h4 style={styles.price}><span style={{ fontSize: '0.6em' }}>Price:</span><span style={{ color: '#E33' }}>${product.price}</span></h4>
          <p style={styles.p}>{product.description}</p>
          <p style={styles.stock}>{product.quantity > 0 ? 'In Stock.' : 'Out of Stock.'}</p>
          <p style={styles.p}><span style={{ fontWeight: 'bold' }}>Quanity: </span>{product.quantity}</p>
        </div>
      </div>
    );
  }
}

module.exports = Show;
