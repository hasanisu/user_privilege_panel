import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Privileges from './components/Privileges/Privileges';
import Hasan from './usercompo/Hasan/Hasan';
import Hamza from './usercompo/Hasan/Hamza/Hamza';
import Users from './components/Users/Users';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {path: '/privileges', element: <Privileges></Privileges>},
        {path: '/users', element: <Users></Users>},
        {path: '/hasan',
         loader: ()=> fetch('fakedb.json'),
         element: <Hasan></Hasan> },
        {path: '/hamza', element: <Hamza></Hamza>}
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
