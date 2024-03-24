import Button from "./Button";
import { GlobalStyles } from "./GlobalStyles";

import { IcCart, IcDelete, IcSeat } from "./Icons";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <p>{"<Button variant></>"}</p>
      <div className="container">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>

      <p>{"<Button color></>"}</p>
      <div className="container">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>

        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
      </div>

      <p>{"<Button disableShadow></>"}</p>
      <div className="container">
        <Button disableShadow>Default</Button>
      </div>

      <p>{"<Button disabled></>"}</p>
      <div className="container">
        <Button disabled>Default</Button>
        <Button disabled variant="outline">
          Outline
        </Button>
        <Button disabled variant="text">
          Text
        </Button>
      </div>

      <p>{"<Button size></>"}</p>
      <div className="container">
        <Button color="secondary" size="sm">
          Secondary (sm)
        </Button>
        <Button color="secondary" size="md">
          Secondary (md)
        </Button>
        <Button color="secondary" size="lg">
          Secondary (lg)
        </Button>
      </div>
      <p>{"<Random button>"}</p>
      <div className="container">
        <Button variant="outline" color="danger">
          Click
        </Button>
        <Button variant="text" color="secondary">
          Click
        </Button>
        <Button size="lg" color="primary">
          Click
        </Button>
        <Button size="sm" color="primary" variant="outline">
          Click <IcSeat />
        </Button>
        <Button size="md" color="danger">
          Click <IcSeat />
        </Button>

        <Button size="lg" color="danger" variant="text">
          <IcSeat />
          Click
        </Button>
        <Button size="lg" disabled variant="outline">
          <IcSeat />
          Click
        </Button>
        <Button size="lg" disabled variant="text">
          <IcSeat />
          Click
        </Button>
      </div>

      <footer>
        By Abderrahmane Benchalel{" "}
        <a href="https://github.com/AbderahmanBenchalel">gitHub</a>
      </footer>
    </div>
  );
}

export default App;
