import './App.css';
import Home from './Pages/home';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Toaster /> {/* Isso garante que os toasts sejam exibidos corretamente */}
      <Home />
    </>
  );
};

export default App;
