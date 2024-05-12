import { FaPlus, FaMinus } from "react-icons/fa6";
import { Product } from '../models/product';

interface OneProductProps {
  product: Product;
  onAdd: (id: number) => void;
}

const OneProduct : React.FC<OneProductProps> = ({ product, onAdd }) => {
  const design = { margin: 10, borderStyle: "dashed" };
  
  return (
    <div className="card" style={design}>
      <img className="card-img-top" src='https://picsum.photos/200' alt='neki alt tekst' />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">
          {product.description}
        </p>
        <a className="btn" onClick={() => onAdd(product.id)}><FaPlus/></a>
        <a className="btn"><FaMinus/></a>
      </div>
    </div>
  )
}

export default OneProduct