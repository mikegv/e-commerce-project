import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './returns.module.css'

const ReturnsForm:React.FC = () => {
    const [order, setOrder] = useState(0);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setOrder(value);
    }
    useEffect(()=>{
        if(order > 0){
            navigate('/returns/'+order)
        }
    },[navigate, order])
    return (
        <div className={classes.returns}>
            <h1>Return</h1>
                <form onSubmit={submitHandler}>
                    <label>Please enter your receipt number</label>
                    <input type='text' value={value} onChange={(e)=>setValue(+e.target.value)} />
                    <button>Submit</button>
                </form>
        </div>
    );
};

export default ReturnsForm;