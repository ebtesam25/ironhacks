import './App.css';
import VouchersGrid from './component/VouchersGrid';
import Logo from './component/img/group78.svg'

function App() {
  return (
    <div className='mycontainer'>
      <div className='centrilize justify-items-center pt-5'>
      <img src={Logo} alt="GoodCoin Logo" class="logoImage"/>
        <VouchersGrid/>
      </div>
    </div>
  );
}

export default App;
