import { ReactElement }  from 'react'
import Button from '@mui/material/Button';

const SignUpButton = (): ReactElement => {
  return (
    <div className="SignUpButton">
        <Button variant="contained" color="primary" >
            Signup
         </Button>
    </div>
  )
};

export default SignUpButton