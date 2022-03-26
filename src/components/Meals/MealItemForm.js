
//form to add items
import { useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm=(props)=>{
    const amountInputRef = useRef();

    const submitHandler = event => {
         event.preventDefault();
    const amountInputRef = useRef();
         const enteredAmount = amountInputRef.current.value;
         const enteredAmountNumber = + enteredAmount;
    }
    return(
        <form className={classes.form}
        onSubmit = {submitHandler}>
            
            {/* reusable field */}
            <Input label='Amount'
            ref={amountInputRef}
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            
            }}/>
            <button>
                +Add
            </button>
            </form>
    )

}
export default MealItemForm;