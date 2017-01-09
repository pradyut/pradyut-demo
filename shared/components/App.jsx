// Libs
import React,
        {Component, PropTypes, Children}      from 'react';
import {connect}                              from 'react-redux';

class App extends Component {
  static propTypes = {
    funds: PropTypes.array.isRequired
  };

  render() {
    const childrenWithProps = Children.map(this.props.children,
    (child) => React.cloneElement(child, {
      dispatch: this.props.dispatch,
      funds: this.props.funds
    })
  );
    return (
      <div className='main'>
        {childrenWithProps}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    funds: state.Funds,
  };
};

export default connect(mapStateToProps)(App);
