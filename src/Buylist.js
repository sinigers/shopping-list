import { useState } from "react";

const Buylist = () => {
  const [products, setProducts] = useState([
    { title: "Киви", body: "плод", quantity: "1", unit: "кг.", id: 1 },
    { title: "Картофи", body: "зеленчук", quantity: "2", unit: "кг.", id: 2 },
    { title: "Ябълки", body: "плод", quantity: "14", unit: "кг.", id: 3 },
    { title: "Кафе", body: "плод", quantity: "14", unit: "кг.", id: 4 }
  ]);

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id); //ako blog id savpada s handleDelete id
    setProducts(newProducts);
  };

  return (
    <div className="home">
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.title}</h2>
          <div className="quant-unit">
            {" "}
            <h2>{product.quantity}</h2>
            <p>{product.unit}</p>
          </div>
          <button onClick={() => handleDelete(product.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Buylist;
