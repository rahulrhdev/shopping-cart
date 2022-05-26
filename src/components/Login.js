import { Grid, TextField, Button, Typography } from "@material-ui/core";
import brand from "../Photos/brand.jpg"
import logo from "../Photos/logo.png"
const Login = () => {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src= {brand}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img src= {logo} width={200} height={200} alt="logo" />
             
            </Grid>
            <Typography variant="h5" color="primary">eShop</Typography>
            <TextField label="Username" margin="normal" required />
            <TextField label="Password" margin="normal" required />
            <div style={{height: 20}} />
            <Button color ="primary" variant = "contained">
                Log in
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
