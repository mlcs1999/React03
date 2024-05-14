import { FaPlus, FaMinus } from "react-icons/fa6";
import { Product } from '../models/product';

interface OneProductProps {
  product: Product;
  onAdd: (id: number) => void;
  inCart: number;
}

const OneProduct : React.FC<OneProductProps> = ({ product, onAdd, inCart }) => {
  const design = { margin: 10, borderStyle: "dashed" };
  
  return (
    <div className={inCart === 1 ? 'card' : 'card-cart'} style={design}>
      <img className="card-img-top" src='https://picsum.photos/200' alt='neki alt tekst' />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">
          {product.description}
        </p>
        {inCart === 1 ?
        <>
          <a className="btn" onClick={() => onAdd(product.id)}><FaPlus/></a>
          <a className="btn"><FaMinus/></a>
        </> :
        <h3>Amount: {product.amount}</h3>
        }
      </div>
    </div>
  )
}

export default OneProduct