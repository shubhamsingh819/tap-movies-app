import Header from "./components/Header";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Button variant="primary">Search</Button>
      <Button variant="danger">Search1</Button>
    </div>
  );
}

export default App;
