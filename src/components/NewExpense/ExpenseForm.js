import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>내용</label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>금액</label>
                <input type="number" min="0" step="1"/>
            </div>
            <div className="new-expense__control">
                <label>날짜</label>
                <input type="date" min="2019-01-01" max="2023-12-31"/>
            </div>
        </div>
            <div className="new-expense__actions">
                <button type="button">내역 추가</button>
            </div>
    </form>
    )
};

export default ExpenseForm;