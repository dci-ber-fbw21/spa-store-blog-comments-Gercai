import React from "react";
import Blog from "../blog";
import BlogPost from "../blogPost";
import Header from "../header";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

import "./index.scss";
import { reLoad } from "../../helper/routing";

class Nexus extends React.Component{

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
    <section className="container">
   <Header></Header>
   <Router>   
      <Route path="/blog" component={Blog}></Route>
      <Route path="/blogPost" component={BlogPost}></Route>
      {/* <Redirect exact from="/blogPost/reload/" to="/blogPost" component={BlogPost} ></Redirect> */}
      <Route exact path="/" component={Blog}></Route>
    </Router>
    </section>
  </article>
)}

}

export default withRouter(Nexus);