import Button from "@mui/material/Button";
import { ReactElement } from "react";

interface NavButtonProps {
    page: string;
    description: string
}


export const NavButton = ({ page, description }: NavButtonProps): ReactElement => {
        return(
            <Button 
            style={{
            fontSize: 20, 
            color: "white"
          }}
            // variant="text" 
            href={page}
            >
            {description}
            </Button>
        )
    };
