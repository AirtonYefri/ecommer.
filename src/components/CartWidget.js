import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

const CartWidget = () => {

  return (
    <div className="cart-widget" >
      <FontAwesomeIcon icon={faHome} size="2x" color="black" />
      <div className="display">0</div>
    </div>
  );
};

export default CartWidget;