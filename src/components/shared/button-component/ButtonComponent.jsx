import { Button, Box } from "@mui/material";

export default function ButtonComponent({
  variant,
  color,
  label,
  disabled,
  handleClick,
}) {
  return (
    <Box>
      <Button
        variant={variant}
        color={color}
        disabled={disabled}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Box>
  );
}
