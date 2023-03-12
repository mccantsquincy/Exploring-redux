import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";
import { decrement } from "../redux/counterSlice";
import { incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery } from "../redux/postsSlice";

const Counter = () => {

   const count = useSelector(state => {
     return state.counter.count;
   })
   const dispatch = useDispatch();

   console.log(useGetAllPostsQuery())

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>increment by amount</button>
    </div>
  );
};

export default Counter;
