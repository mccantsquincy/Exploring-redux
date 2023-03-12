import { useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";
import { decrement } from "../redux/counterSlice";


const Counter2 = () => {
  const dispatch = useDispatch();  
  return (
    <div>
      <h1>this is Counter 2</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter2;
