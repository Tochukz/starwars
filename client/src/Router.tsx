import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Page from './pages/Page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/:page" element={<Page />} />
      <Route path="/details/:personId" element={<Details />} />
    </Routes>
  )
}