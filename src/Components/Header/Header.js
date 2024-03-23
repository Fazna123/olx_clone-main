import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
//import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';

function Header() {

  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search name='Places'>
            <option value="India">India</option>
            <option value="Kerala">Kerala</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
          </Search>
          {/* <input type="text" />
          <Arrow></Arrow> */}
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <select name="Language">
              <option value="English">English</option>
              <option value="हिंदी">हिंदी</option>
      
          </select>
        </div>
        <div className="loginPage">
          <span>{user?`Welcome ${user.displayName}`:<a href='/login'>Login</a>}</span>
          <hr />
          
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut()
          history.push('/login')
        }}>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span><a href='/create'>SELL</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
