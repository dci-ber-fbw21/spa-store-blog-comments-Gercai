import React from "react";
import "./index.scss";
import BlogSVG from "../../svg/Blog.js";

class Header extends React.Component{

render(){
return (
  <article className="header">
<p><BlogSVG className="blog"/></p><h1>My Blog</h1> 
  </article>
)}
 
}

export default Header;