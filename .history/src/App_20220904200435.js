import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <GlobalProvider>
    <Header/>
<div className="container">
<Balance/>
<IncomeExpenses/>
<T/>

</div>

    </GlobalProv>
    
    </>
  );
}

export default App;
