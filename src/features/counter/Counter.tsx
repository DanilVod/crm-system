import Button from '../../components/Button';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import { decrement, increment } from './counterSlice';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{count}</h1>
      <Button onclick={() => dispatch(increment())} />
    </>
  );
}
