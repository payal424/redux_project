
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment, decrement,debite,credite} from './state/action/action';
function App() {
  const amount = useSelector(state => state.amount);
  const amount1 = useSelector(state => state.amount1);
  const dispatch = useDispatch();
 const onClickHandlerInc = () => {
    dispatch(increment(1));
 }

 const onClickHandlerDec = () => {
  dispatch(decrement(1));
}

const onClickHandlerDebite = () => {
  dispatch(debite(3));
}

const onClickHandlerCredite = () => {
  dispatch(credite(3));
}

  return (
    <div>
      <div>updated amount: {amount}</div>
      <div>updated amount: {amount1}</div>

      <div>BankReducer</div>
      <div>
        <button onClick={onClickHandlerDec}>-</button>WithDraw <button onClick={onClickHandlerInc}>+</button></div>

        <div>AccountReducer</div>
      <div>
        <button onClick={onClickHandlerDebite}>-</button>WithDraw <button onClick={onClickHandlerCredite}>+</button></div>
    </div>
  );
}

export default App;
