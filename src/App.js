import { Conditional } from "./lib";

function App() {
  return (
    <div className="App">
      <Conditional 
        condition={1 === 1}
        ifTrueComponent={<p>Rodrigo</p>}
        elseComponent={<p>araujo</p>}
      />
    </div>
  );
}

export default App;
