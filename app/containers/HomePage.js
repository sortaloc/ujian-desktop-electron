// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Login from '../components/Login';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Login />;
  }
}
