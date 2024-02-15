import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ButtonComponent from "../button-component/ButtonComponent";

export default function CardComponent({
  userId,
  title,
  completed,
  handleClick,
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {userId}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {completed ? "Completed" : "Not Completed"}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonComponent
            variant={"contained"}
            color={"primary"}
            label={"See More Details"}
            handleClick={() => handleClick(userId)}
          />
        </CardActions>
      </Card>
    </Box>
  );
}
