import Button from "@mui/material/Button";

interface Props {
    page: string;
    description: string
}

export default function NaButton({ page, description }: Props) {
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

