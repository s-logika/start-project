
import { Link } from "react-router-dom";


function Header() {
    return(
    
      <>
      <div className="main">
        <ul>
            <li>
                <Link to="/" className="main-t">Home</Link>
            </li>
            <li>
                <Link to="/about" className="main-t">About</Link>
            </li>
            <li>
                <Link to="/login" className="main-t">Login</Link>
            </li>
        </ul>
      </div>
      </>
    );
}
export default Header