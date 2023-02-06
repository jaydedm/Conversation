import Button from "@mui/material/Button";
import { ReactElement } from "react";

interface NavButtonProps {
    page: string;
    description: string
    secondary?: boolean
}


export const NavButton = ({ page, description, secondary }: NavButtonProps): ReactElement => {
        return(
            <Button 
            style={{
            fontSize: 20, 
            color: secondary ? '#964B00' : 'white' 
          }}
            href={page}
            >
            {description}
            </Button>
        )
    };
