import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/*강효원 권범수*/}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className={"expense-item__price"}>{props.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;