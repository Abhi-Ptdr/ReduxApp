import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  //destructuring the actions

  const balance = useSelector(state => state.amount)

  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        {/* 
        <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
          Update Balance
        <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button> 
        this is how we can do without using bindActionCreators but we can use bindActionCreators to make it more readable.
        */}

        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
          Update Balance ({balance})
        <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
    
    </div>
  )
}

export default Shop
