import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = () => {
  return (
    //   Navbar
    <Card sx={{ maxWidth: 150, m: 4, minHeight: 50 }} width="100">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Product Name
        </Typography>
        {/* Product image goes in box */}
        <Box
          component="img"
          sx={{
            height: 100,
            width: 100,
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 },
          }}
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        {/* Product Description  */}
        <Typography variant="body2">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove from cart</Button>
      </CardActions>
    </Card>
  );
};

export default Cart;
