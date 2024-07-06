import './loading.css';
import { Component } from 'react';

export class Loading extends Component {
  render() {
    return (
      <div className="loading__wrapper">
        <p className="loading__title">Loading...</p>
      </div>
    );
  }
}
