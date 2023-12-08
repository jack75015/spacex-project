import React from "react";
import { LaunchType } from "../types/launch.type";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface LaunchProps {
  launch: LaunchType;
}

const Launch = (props: LaunchProps) => {
  const { launch } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={launch?.links.patch.small} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {launch.name}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Flight number: {launch.flight_number}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Date UTC: {launch.date_utc}
        </Typography>
        <Divider sx={{ margin: "15px" }} />

        {launch.details ? (
          <>
            <Typography variant="body2" color="text.secondary">
              Details: {launch.details}
            </Typography>
            <Divider sx={{ margin: "15px" }} />
          </>
        ) : (
          <></>
        )}

        {launch?.links?.webcast ? (
          <Typography variant="body2" color="text.secondary">
            <Link href={launch.links.webcast}>Webcast</Link>
          </Typography>
        ) : (
          <></>
        )}
        {launch?.links?.presskit ? (
          <Typography variant="body2" color="text.secondary">
            <Link href={launch.links.presskit}>Presskit</Link>
          </Typography>
        ) : (
          <></>
        )}
        {launch?.links?.wikipedia ? (
          <Typography variant="body2" color="text.secondary">
            <Link href={launch.links.wikipedia}>Wikipedia</Link>
          </Typography>
        ) : (
          <></>
        )}
      </CardContent>

      <Typography
        onClick={(_e) => {
          navigate(`/`);
        }}
        sx={{ cursor: "pointer" }}
      >
        🔙
      </Typography>
    </Card>
  );
};

export default Launch;
