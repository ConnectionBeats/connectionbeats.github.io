import './assets/scss/scrollbars.scss';

import Header from './components/header';
import PriceList from './components/price-list';
import Contacts from './components/contacts';
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <PriceList />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
