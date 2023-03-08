import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            {/*강효원 권범수*/}
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className={"expense-item__price"}>{expenseAmount}원</div>
            </div>
        </div>
    );
}

export default ExpenseItem;