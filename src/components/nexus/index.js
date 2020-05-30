import React from "react";
import Blog from "../blog";
import BlogPost from "../blogPost";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";

import "./index.scss";

class Hub extends React.Component{

componentDidMount(){

}

GoTo(pathname){
  let {history} = this.props;
  history.push({
    pathname,
    search: ""
  })
}

render(){

return (

  <article>
    <p>Image_Placeholder</p>
    <section className="container">
      <Router>
   
   <Route path="/blog" component={Blog}></Route>
   <Route path="/blogPost" component={BlogPost}></Route>
   <Route exact path="/" component={Blog}></Route>

     </Router>
    </section>
  </article>
)}

}

export default withRouter(Hub);