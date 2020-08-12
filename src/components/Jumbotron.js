import React from 'react';

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className='jumbotron m-3 p-3 shadow-sm'>
        <h1 className='display-4'>calculator-app-react</h1>
        <p className='lead'>this is a calculator app, created with react.</p>
      </div>
    );
  }
}