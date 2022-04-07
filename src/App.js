import { Conditional } from "./lib";

function App() {
  return (
    <div className="App">
      <Conditional 
        condition={true}
        ifTrueComponent={<p>Rodrigo</p>}
        elseComponent={<p>araujo</p>}
      />
    </div>
  );
}

export default App;
