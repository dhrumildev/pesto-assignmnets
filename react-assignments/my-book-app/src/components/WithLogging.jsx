import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is rendered`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
