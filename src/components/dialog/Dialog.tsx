import { Component } from 'react';

export class Dialog extends Component {
  render() {
    return (
      <dialog open>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    );
  }
}
