function ExpenseDate(props){
    const month = props.date.toLocaleString('ko-KR', {month: 'long'});
    const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});
    const year = props.date.getFullYear();

    return <div>{year}년 {month} {day}</div>;
}

export default ExpenseDate;