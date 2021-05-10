import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  useTheme,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(20),
  },
  processH4: {
    justifyContent: "center",
    display: "flex",
  },
}));

const Process = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="process">
      <Typography className={classes.processH4} variant="h4">
        {" "}
        Our Process{" "}
      </Typography>
      <Toolbar />
      <Grid container spacing="3">
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Step 1
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Step 2
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Step 3
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Step 4
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Process;
