const React = require('react');
const Layout = require('./Components/Layout');
const Nav = require('./Components/Nav');
const ProductCard = require('./Components/ProductCard');

const styles = {
  list: {
    margin: '10px auto 0 auto',
    padding: 0,
    maxWidth: '1400px',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  }
};

class Index extends React.Component {
  render () {
    return (
      <Layout>
        <Nav>
          <a href='/product/new'>new product</a>
        </Nav>
        <ul style={styles.list}>
          {this.props.products.map((product, index) =>
            <ProductCard key={index} product={product} />
          )}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;
