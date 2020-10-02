import React from 'react';

// note the class keyword that is reserved for JS 
class ClassComponent extends React.Component {
  // render method required in all components
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

export default ClassComponent;
