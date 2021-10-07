import { useContext } from "react";
import { ConfraContext } from "../../providers/Confraternização";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { green, red } from "@mui/material/colors";
import { Cards, Container, Header } from "../Display/style";

const ConfraCart = () => {
  const { removeConfraCart, confraCart } = useContext(ConfraContext);

  return (
    <>
      <Header>CARRINHO DA CONFRATERNIZAÇÃO</Header>
      <Container>
        {confraCart.map((item, index) => {
          return (
            <Cards
              sx={{
                maxWidth: 345,
                height: 490,
                marginLeft: 2,
                marginBottom: 2,
              }}
              key={index}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={
                      index % 2 === 0
                        ? { bgcolor: red[500] }
                        : { bgcolor: green[500] }
                    }
                  >
                    {item.name[0]}
                  </Avatar>
                }
                title={item.name}
                subheader={`${item.first_brewed}, ${item.volume.value}L`}
              />
              <CardMedia
                component="img"
                image={item.image_url}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="body2" color="inherit">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={() => removeConfraCart(item.id)}
                  color="inherit"
                >
                  <CancelIcon />
                </IconButton>
              </CardActions>
            </Cards>
          );
        })}
      </Container>
    </>
  );
};

export default ConfraCart;
