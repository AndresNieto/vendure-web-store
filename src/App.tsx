import { AppContainer } from './App.styled';
import HeaderComponent from './components/Header/Header';
import ProductListComponent from './components/ProductList/ProductList';
import OrderContextProvider from './context/OrderContextProvider';

const App = () => (
  <OrderContextProvider>
    <AppContainer>
      <HeaderComponent></HeaderComponent>
      <ProductListComponent></ProductListComponent>
    </AppContainer >
  </OrderContextProvider>

);

export default App;

