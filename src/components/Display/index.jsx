import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CasamentoContext } from "../../providers/Casamento";
import { ConfraContext } from "../../providers/Confraternização";
import { FormaturaContext } from "../../providers/Formatura";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  createSvgIcon,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { green, red } from "@mui/material/colors";
import { Cards, Container } from "./style";

const Display = () => {
  const { addToFormCart } = useContext(FormaturaContext);
  const { addToConfraCart } = useContext(ConfraContext);
  const { addToCasamentoCart } = useContext(CasamentoContext);
  const [beers, setBeers] = useState([]);

  const FormIcon = createSvgIcon(
    <path
      fill="currentColor"
      d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
    />,
    "Formatura"
  );

  const ConfraIcon = createSvgIcon(
    <path
      fill="currentColor"
      d="M14.53 1.45L13.45 2.53L15.05 4.13C15.27 4.38 15.38 4.67 15.38 5S15.27 5.64 15.05 5.86L11.5 9.47L12.5 10.55L16.13 6.94C16.66 6.35 16.92 5.7 16.92 5C16.92 4.3 16.66 3.64 16.13 3.05L14.53 1.45M10.55 3.47L9.47 4.55L10.08 5.11C10.3 5.33 10.41 5.63 10.41 6S10.3 6.67 10.08 6.89L9.47 7.45L10.55 8.53L11.11 7.92C11.64 7.33 11.91 6.69 11.91 6C11.91 5.28 11.64 4.63 11.11 4.03L10.55 3.47M21 5.06C20.31 5.06 19.67 5.33 19.08 5.86L13.45 11.5L14.53 12.5L20.11 6.94C20.36 6.69 20.66 6.56 21 6.56S21.64 6.69 21.89 6.94L22.5 7.55L23.53 6.47L22.97 5.86C22.38 5.33 21.72 5.06 21 5.06M7 8L2 22L16 17L7 8M19 11.06C18.3 11.06 17.66 11.33 17.06 11.86L15.47 13.45L16.55 14.53L18.14 12.94C18.39 12.69 18.67 12.56 19 12.56C19.33 12.56 19.63 12.69 19.88 12.94L21.5 14.53L22.55 13.5L20.95 11.86C20.36 11.33 19.7 11.06 19 11.06Z"
    />,
    "Confraternização"
  );

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?per_page=48")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {beers.map((item, index) => {
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
            <CardMedia component="img" image={item.image_url} alt={item.name} />
            <CardContent>
              <Typography variant="body2" color="inherit">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton onClick={() => addToFormCart(item)} color="inherit">
                <FormIcon />
              </IconButton>
              <IconButton onClick={() => addToConfraCart(item)} color="inherit">
                <ConfraIcon />
              </IconButton>
              <IconButton
                onClick={() => addToCasamentoCart(item)}
                color="inherit"
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Cards>
        );
      })}
    </Container>
  );
};

export default Display;
