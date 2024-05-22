import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainBody from './components/MainPage/MainBody/MainBody';
import Company from './components/MainPage/Company/Company';
import MainPage from './components/MainPage/MainPage';
import Isolation from './components/HidroIsolation/Isolation'
import IsolationBody from './components/HidroIsolation/IsolationBody/IsolationBody';
import IsolationProducts from './components/HidroIsolation/IsolationProducts/IsolationProducts';
import IsolationServices from './components/HidroIsolation/IsolationServices/Services';
import Technology from './components/HidroIsolation/IsolationTechnology/Technology';
import InstallationBody from './components/InstallationSystems/InstallationBody/InstallationBody';
import InstallationSystem from './components/InstallationSystems/MainPage/MainPage';
import IsolationProductDetails from './components/HidroIsolation/IsolationProductDetails/ProductDetails';
import InstallationProducts from './components/InstallationSystems/InstallationProducts/Products';
import { LoadingProvider } from './components/Loader/LoadingContext';
import InstallationTechnology from './components/InstallationSystems/InstallationTechnology/Technology';
function App() {
  return (
    <LoadingProvider>
    <Routes>
      <Route path="*" element={<Navigate from="*" to="/" />} />
      <Route exact path="/" Component={MainBody}>
        <Route exact path="/" Component={MainPage} />
        <Route exact path="/about" Component={Company} />
      </Route>
      
      <Route exact path="/isolation-system" Component={IsolationBody}>
         <Route exact path="/isolation-system" Component={Isolation}/>
         <Route exact path = "/isolation-system/products" Component={IsolationServices}/>
         <Route exact path = "/isolation-system/products/:id" Component={IsolationProducts}/>
         <Route exact path = "/isolation-system/products/:id/:product_id" Component={IsolationProductDetails}/>

         <Route exact path = "/isolation-system/technology" Component={Technology}/>
      </Route>

      <Route exact path="/installation-system" Component={InstallationBody}> 
        <Route exact path="/installation-system" Component={InstallationSystem}/>
        <Route exact path="/installation-system/products" Component={InstallationProducts}/>
        <Route exact path="/installation-system/products/:id" Component={InstallationProducts}/>
        <Route exact path="/installation-system/technology" Component={InstallationTechnology}/>
        
        

      </Route>

    </Routes>
    </LoadingProvider>
  );
}

export default App;
