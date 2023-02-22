import { Conditional } from "./lib/index";

function App() {
  const userHasPermission = true;
  return (
    <div className="App">
      <Conditional
        condition={userHasPermission}
        then={<p>Your password is #DSE34D3dW@sds@Cd</p>}
        else={<p>You don't have access</p>}
      />
    </div>
  );
}

export default App;
