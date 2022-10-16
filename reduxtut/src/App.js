import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { increment } from './actions/index';
function App() {

  const counter= useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Are you logged ? 
        </p>

        {isLogged ? <h1> YUP! LOGGED IN</h1> : <h1> NOPE IM NOT</h1>}

        {/* <button></button> */}
        <button onClick={()=> dispatch(increment)}>INCREMENT</button>
        <p>{counter}</p>

      </header>
    </div>
  );
}

export default App;
