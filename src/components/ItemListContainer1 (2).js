// Own components
import ItemList from "./ItemList";

// Imageness
import Keyboard from "../assets/imagenes/imagen1.png";
import Keyboard1 from "../assets/imagenes/imagen2.jpeg";
import Mouse from "../assets/imagenes/imagen3.jpeg";
import Mouse1 from "../assets/imagenes/imagen4.jpg";


const productos = [
  {
    id: "1",
    name: "Keyboard",
    description: "Keyboard description",
    stock: 5,
    img: Keyboard,
  },
  {
    id: "2",
    name: "Mouse",
    description: "Mouse description",
    stock: 2,
    img: Mouse,
  },
];

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(productos);
    }, 3000)
  );

  productList.then((data) => setProducts(data));

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;