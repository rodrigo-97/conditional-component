import { Conditional } from "./lib/index";
function App() {
  const userHasPermission = true;
  return (
    <div className="App">
      <Conditional
        condition={userHasPermission}
        then={<>Your password is #DSE34D3dW@sds@Cd</>}
        else={<>You don't have access</>}
      />
    </div>
  );
}

export default App;
