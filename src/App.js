import './App.css';
import AdviceGen from './component/AdviceGen';
import Info from './component/Info';

function App() {
  return (
    <div className="app">
     <AdviceGen />

     <div className='app__footer'>
      <Info />  
     </div>
    </div>
  );
}

export default App;
