import { useContext } from "react";
import { ConfraContext } from "../../providers/Confraternização";

const ConfraCart = () => {
  const { removeConfraCart, confraCart } = useContext(ConfraContext);

  return (
    <section>
      {confraCart.map((item, index) => {
        return (
          <div className="container" key={index}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}L</p>
            <button onClick={() => removeConfraCart(item.id)}>
              REMOVE FROM CONFRA
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ConfraCart;
