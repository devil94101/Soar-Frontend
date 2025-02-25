import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { lazy, Suspense } from 'react';
import Settings from './pages/Settings';


const LayoutComponent = lazy(() => import('./components/Layout'));
const DashboardComponent = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LayoutComponent />}>
              <Route index element={<DashboardComponent />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;