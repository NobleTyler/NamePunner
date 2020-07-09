import React from 'react';
import {useForm} from 'react-hook-form'
const Input = (props) =>{
    const validate = input =>{
        let tooShort = input.length <= 50;
        let tooLong = input.length >= 500;
        return tooShort && tooLong
    }

    return(
        <form>
            <label>
                New pun for : {props.Name}
            </label>
            <input type='text'></input>
        </form>
    )
}
export default Input