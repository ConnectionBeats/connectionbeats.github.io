import Header from './components/header';
import PriceList from './components/price-list';
import Contacts from './components/contacts';
import AnimBackground from './components/anim-background';

function App() {
  return (
    <div className="app">
      {/* <AnimBackground /> */}
      <Header />
      <PriceList />
      <Contacts />
    </div>
  );
}

export default App;
