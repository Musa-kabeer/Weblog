import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import Create from './pages/Create';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="posts" />} />
            <Route path="posts" element={<Home />} />
            <Route path="post/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
