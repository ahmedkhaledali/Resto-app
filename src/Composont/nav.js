import "react-bootstrap";
import "../App.css";
import logo from "../image/logo.png"

function Nav1() {
  return (
      
    <div class="row justify-content-center">
        <div class="col-md-4"></div>
        <div class="col-md-4">
  <img src={logo} alt="" class="logo"/>
  </div>
  <div class="col-md-4 icons">
  <img src="https://img.icons8.com/material-rounded/30/000000/facebook-circled--v1.png"/>
  <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/>
  <img src="https://img.icons8.com/material-rounded/30/000000/pinterest--v1.png"/>
  <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter-circled--v1.png"/>
  <img src="https://img.icons8.com/ios-filled/30/000000/search--v1.png"/>
  </div>
    </div>
  );
}

export default Nav1;
