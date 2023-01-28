import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const EditItem = () => {
  return (
    <Button size="small" onClick={() => console.log("Editing")}>
      <Typography fontSize="12px" fontWeight={600}>
        Edit
      </Typography>
    </Button>
  );
};

export default EditItem;
