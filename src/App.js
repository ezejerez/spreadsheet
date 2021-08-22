import './App.css';
import Logo from './img/Logo.svg';
import Table from './components/Table/table';

function App() {
  function add(cell) {
    return cell + cell;
  }

  function subtract(cell) {
    return cell - cell;
  }

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

      <Table onAddButton={add} onSubtractButton={subtract} />
    </>
  );
}

export default App;
