import { useDispatch, useSelector } from "react-redux";
import { Decrement,Increment } from "./redux/action/counterAction";

function App() {

  const Dispatch = useDispatch();

  const no = useSelector(state => state.kunjal);

  return (
    <>
      <div align="center">
        <h1>Counter App</h1>
        <h2>Count :- {no}</h2>
        <button onClick={() => Dispatch(Increment())}> + </button>
        <button onClick={() => Dispatch(Decrement())}> - </button>
      </div>
    </>
  )
}

export default App;
