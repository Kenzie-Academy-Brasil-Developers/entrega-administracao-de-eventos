import { useContext } from "react";
import { FormaturaContext } from "../../providers/Formatura";

const FormaturaCart = () => {
  const { removeFormCart, formCart } = useContext(FormaturaContext);

  return (
    <section>
      {formCart.map((item, index) => {
        return (
          <div className="container" key={index}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}L</p>
            <button onClick={() => removeFormCart(item.id)}>
              REMOVE FROM FORMATURA
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default FormaturaCart;
