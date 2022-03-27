import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

export default function HighlightCard({ titile, count, type }) {
  const useStyles = makeStyles({
    wrapper: (props) => {
      if (props.type === "confirmed")
        return { borderLeft: "5px solid #c9302c", color: "#c9302c" };
      else if (props.type === "recovered")
        return { borderLeft: "5px solid #28a745", color: "#28a745" };
      else return { borderLeft: "5px solid gray", color: "gray" };
    },
    titile: {
      fontSize: 18,
      marginBottom: 5,
    },
    count: {
      fontWeight: "bold",
      fontSize: 18,
    },
  });
  const styled = useStyles({ type });
  return (
    <Grid item sm={4} xs={12}>
      <Card className={styled.wrapper}>
        <CardContent>
          <Typography component="p" variant="body2" className={styled.titile}>
            {titile}
          </Typography>
          <Typography component="span" variant="body2" className={styled.count}>
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
