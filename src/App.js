import './App.css';
import Logo from './img/Logo.svg';
import Table from './components/Table/table';

function App() {
  return (
    <>
      <div className='navbar'>
        <img src={Logo} alt='Logo' />
      </div>

      <div className='formulas_container'>
        <div className='formulas'>
          <button>Add</button>
          <button>Subtract</button>
        </div>
      </div>

      <Table />
    </>
  );
}

export default App;
