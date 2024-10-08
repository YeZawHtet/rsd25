import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Icon,
} from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";

export default function Item({ item, remove }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{bgcolor:"banner"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}>
            <TimeIcon fontSize="10" color="success" />
            <Typography
              variant="caption"
              sx={{ color: "text.fade" }}>
              A few Second ago!
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={() => remove(item.id)}>
            <DeleteIcon fontSize="inherit"></DeleteIcon>
          </IconButton>
        </Box>

        <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <UserIcon
            fontSize="12"
            color="info"
          />
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
} 