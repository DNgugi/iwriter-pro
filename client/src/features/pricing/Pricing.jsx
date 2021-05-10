import React from "react";
import {
  Card,
  CardContent,
  useTheme,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(20),
  },
  priceH4: {
    justifyContent: "center",
    display: "flex",
  },
}));

const Pricing = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={classes.root} id="pricing">
      <Typography className={classes.priceH4} variant="h4">
        {" "}
        Our Prices{" "}
      </Typography>
      <Toolbar />
      <Grid container spacing="3">
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Writing
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
              <Typography variant="h5">$25/Page</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Editing
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
              <Typography variant="h5">$15/Page</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Proofreading
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
              <Typography variant="h5">$18.50/Page</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Card>
            <CardContent>
              <Typography variant="h5" component="p">
                Tutoring
              </Typography>
              <Toolbar />
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tenetur.
              </Typography>
              <Typography variant="h5">From $25/Hour</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Pricing;
