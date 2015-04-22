/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import TextInput from './text-input.jsx';
import Actions from '../actions/';

/**
 * This is the Header component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class Header extends React.Component {

  /**
   * Render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <header className="header">
        <h2>Todo</h2>
        <TextInput
          className="new-item"
          placeholder="What needs to be done?"
          onSave={this.onSave.bind(this)}
        />
      </header>
    );
  }

  /**
   * Event handler that creates a new todo item.
   *
   * @param {string} text
   *
   * @return void
   */
  onSave(text) {
    if (text.trim()){
      Actions.create(text);
    }
  }
}