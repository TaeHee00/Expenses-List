import './ExpenseItem.css';

function ExpenseItem(props){
    const expenseData = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <div className="expense-item">
            <div>{expenseData.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className={"expense-item__price"}>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;