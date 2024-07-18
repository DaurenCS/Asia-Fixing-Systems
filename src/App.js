import React from 'react';
import './App.css';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import MainBody from './components/MainPage/MainBody/MainBody';
import Company from './components/MainPage/Company/Company';
import MainPage from './components/MainPage/MainPage';
import Isolation from './components/HidroIsolation/Isolation';
import MountingBody from './components/MountingFoams/MountingBody/MountingBody';
import IsolationBody from './components/HidroIsolation/IsolationBody/IsolationBody';
import IsolationProducts from './components/HidroIsolation/IsolationProducts/IsolationProducts';
import IsolationServices from './components/HidroIsolation/IsolationServices/Services';
import Technology from './components/HidroIsolation/IsolationTechnology/Technology';
import InstallationBody from './components/InstallationSystems/InstallationBody/InstallationBody';
import IsolationProductDetails from './components/HidroIsolation/IsolationProductDetails/ProductDetails';
import InstallationProducts from './components/InstallationSystems/InstallationProducts/Products';
import { LoadingProvider } from './components/Loader/LoadingContext';
import InstallationTechnology from './components/InstallationSystems/InstallationTechnology/Technology';
import IsolationCertificate from './components/HidroIsolation/IsolationCertificates/Certificates';
import InstallationCertificate from './components/InstallationSystems/InstallationCertificates/Certificates';
import Contacts from './components/MainPage/Contacts/Contacts';
import InstallationProductDetails from './components/InstallationSystems/ProductDetails/ProductDetail';
import InstallationSystem from './components/InstallationSystems/MainPage/MainPage';
import { useTranslation } from 'react-i18next';
import './i18n';
import MountingSystem from './components/MountingFoams/MountingSystems/MountingSystems';
import MountingProducts from './components/MountingFoams/MountingProducts/MountingProducts';
import MountingCertificate from './components/MountingFoams/MountingCertificates/MountingCertificates';

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const { local } = useParams();

  React.useEffect(() => {
    const supportedLanguages = ['en', 'ru'];
    if (local && i18n.language !== local) {
      if (supportedLanguages.includes(local)) {
        i18n.changeLanguage(local);
      } else {
        i18n.changeLanguage('en');
        window.location.replace('/en');
      }
    }
  }, [local, i18n]);

  return children;
};

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/:local" element={<LanguageWrapper><MainBody /></LanguageWrapper>}>
          <Route index element={<MainPage />} />
          <Route path="/:local/about" element={<Company />} />
          <Route path="/:local/contacts" element={<Contacts />} />
        </Route>
        
        <Route path="/:local/isolation-system" element={<IsolationBody />}>
          <Route index element={<Isolation />} />
          <Route path="products" element={<IsolationServices />} />
          <Route path="products/:id" element={<IsolationProducts />} />
          <Route path="products/:id/:product_id" element={<IsolationProductDetails />} />
          <Route path="certificates" element={<IsolationCertificate />} />
          <Route path="technology" element={<Technology />} />
        </Route>

        <Route path="/:local/installation-system" element={<InstallationBody />}>
          <Route index element={<InstallationSystem />} />
          <Route path="products" element={<InstallationProducts />} />
          <Route path="products/:id" element={<InstallationProducts />} />
          <Route path="product/:product_id" element={<InstallationProductDetails />} />
          <Route path="certificates" element={<InstallationCertificate />} />
          <Route path="technology" element={<InstallationTechnology />} />
        </Route>

        <Route path="/:local/mounting-foams" element={<MountingBody />}>
          <Route index element={<MountingSystem />} />
          {/* <Route path="products" element={<InstallationProducts />} /> */}
          <Route path="products/:id" element={<MountingProducts />} />
          <Route path="product/:product_id" element={<InstallationProductDetails />} />
          <Route path="products/:id/:product_id" element={<IsolationProductDetails />} />
          <Route path="certificates" element={<MountingCertificate />} />
          {/* <Route path="technology" element={<InstallationTechnology />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/en" />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
