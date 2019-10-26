import * as React from "react";

interface Props {
    name: string;
}

export default class App extends React.Component<Props, {}> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}