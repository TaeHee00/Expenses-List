import './ExpenseItem.css';

function ExpenseItem(props){
    const expenseData = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    const month = props.date.toLocaleString('ko-KR', {month: 'long'});
    const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{year}년 {month} {day}</div>
                {/*강효원 권범수*/}
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className={"expense-item__price"}>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;