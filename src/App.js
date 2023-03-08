import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: '화장지',
            amount: 800,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'TV 구매',
            amount: 1000000,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: '커피 구매',
            amount: 2000,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: '학교 교재 구매',
            amount: 120000,
            date: new Date(2021, 5, 12),
        },
    ]


  return (
    <div className="App">
      <h2>지출 내역</h2>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
