// HeaderContact.js
// import React from 'react'
import styles from './HeaderContact.module.css'
import CustomInput from './CustomInput'

const HeaderContact = () => {
    return (
        <div className={styles['contact-header']}>
            <h1>Need help? Contact us</h1>

            <div className={styles['contact-header-input']}>
                <CustomInput type="text" placeholder="Your name" />
                <CustomInput type="text" placeholder="Your email" />
                <CustomInput type="text" placeholder="Your mobile number" />
                <CustomInput type="text" placeholder="Message" />
                <button className={styles['contact-header-button']}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default HeaderContact
