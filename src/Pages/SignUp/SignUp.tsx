import { ReactElement }  from 'react'
import SignUpButton from "../../components/SignUpButton/SignUpButton"
// input for username 
// input for phone number 
// button - onclick, sends info to db 
// use modules.css to avoid namespace collision for CSS classes

export const SignUp = (): ReactElement => {
    return (
        <div>
            <SignUpButton />
        </div>
    )
}


  