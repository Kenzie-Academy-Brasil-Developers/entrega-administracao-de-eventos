import axios from "axios";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { CasamentoContext } from "../../providers/Casamento";
import { ConfraContext } from "../../providers/Confraternização";
import { FormaturaContext } from "../../providers/Formatura";

const Display = () => {
  const { addToFormCart } = useContext(FormaturaContext);
  const { addToConfraCart } = useContext(ConfraContext);
  const { addToCasamentoCart } = useContext(CasamentoContext);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?per_page=48")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <section>
      {beers.map((item, index) => {
        return (
          <div className="container" key={index}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}L</p>
            <button onClick={() => addToConfraCart(item)}>ADD TO CONFRA</button>
            <button onClick={() => addToCasamentoCart(item)}>
              ADD TO CASAMENTO
            </button>
            <button onClick={() => addToFormCart(item)}>
              ADD TO FORMATURA
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Display;
