import { h, Component, render } from "preact";
export interface AppProps {
  name: string;
}
interface AppState {
  name: string;
}
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: props.name };
  }
  componentDidMount() {
    setTimeout(() => { 
      const state = this.state;
      state.name = "Test";
      this.setState(state);
    }, 2000);
  }
  render(props: AppProps, state: AppState) {
    return <h1>props: {props.name} state: {state.name}</h1>;
  }
}

render(<App name="World" />, document.querySelector("#contents"));
