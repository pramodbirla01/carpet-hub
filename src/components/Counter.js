'use client'; // Add this at the very top

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
