import { useState } from 'react'
// useState hook to manage the state of the input field and update it when the user types.
import PropTypes from 'prop-types' // Import PropTypes
// import styles
import styles from './HeaderContact.module.css'

// type and placeholder as props to customize the input type and placeholder text for each field
const CustomInput = ({ type, placeholder }) => {
    //  value and onChange props to control the input field's value and update it as the user types.
    const [value, setValue] = useState('')

    // handleChange is a function that takes an event object (e) as its argument
    const handleChange = (e) => {
        // e.target.value is the current value of the input element.
        // It represents what the user has typed into the input field.
        setValue(e.target.value)
        // setValue(e.target.value) is a call to the setValue function, which is part of the useState hook.
        // It updates the state variable(value) with the new value that the user has typed.
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={styles['custom-input']}
        />
    )
}

// PropTypes validation for the type and placeholder props by setting their
// types to strings and marking them as required using.isRequired.
CustomInput.propTypes = {
    type: PropTypes.string.isRequired, // Example: "text"
    placeholder: PropTypes.string.isRequired // Example: "Your name"
}

export default CustomInput
