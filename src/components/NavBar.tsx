import { IoCartOutline } from "react-icons/io5";

interface NavBarProps {
  cartNum: number;
}

const NavBar: React.FC<NavBarProps> = ({cartNum}) => {
  return (
    <>
    <div className='navBar'>
        <a>My Store</a>
        <div className="cart-items">
          <IoCartOutline/>
          <p className="cart-num">{cartNum}</p>
        </div>
    </div>
    </>
  )
}

export default NavBar