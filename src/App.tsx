import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { lazy, Suspense } from 'react';
import Settings from './pages/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import Transactions from './pages/Transactions';


const LayoutComponent = lazy(() => import('./components/Layout'));
const DashboardComponent = lazy(() => import('./pages/Dashboard'));
const AllCards = lazy(() => import('./pages/AllCards'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LayoutComponent />}>
              <Route index element={<DashboardComponent />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/credit-cards" element={<AllCards />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;