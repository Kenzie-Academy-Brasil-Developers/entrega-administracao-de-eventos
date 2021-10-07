import { useContext } from "react";
import { CasamentoContext } from "../../providers/Casamento";

const WeddingCart = () => {
  const { removeCasamentoCart, casamentoCart } = useContext(CasamentoContext);

  return (
    <section>
      {casamentoCart.map((item, index) => {
        return (
          <div className="container" key={index}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}L</p>
            <button onClick={() => removeCasamentoCart(item.id)}>
              REMOVE FROM CASAMENTO
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default WeddingCart;
