import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentForm from "../commentForm";
import Comments from "../comments";
import "./index.scss";
import {goTo} from "../../helper/routing";
import arrow from "../../svg/arrow.svg";
import Home from "../../svg/home.svg";

import {ReactComponent as ArrowSVG} from "../../svg/arrow.svg";
import {ReactComponent as HomeSVG} from "../../svg/home.svg";



class BlogPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogId: this.props.blogId,
            blogPost: [],
            toggle: true
        }
    }

    componentDidMount(){
        console.log(this.props);
        console.log("props");
        let location = this.props.location;
        let blogPost =  this.state.list.find(element => element.id === location.search.substring(1));
        this.setState({
            blogPost
        })
    }

    toggleMenu = () => {
       let checkToggle = this.state.toggle?false:true;
       this.setState({
            toggle:checkToggle
        })
    }

    render(){
        return (
            <div className="postContainer">
              
              <section className={`menu ${this.state.toggle?"toggle":"hide"}`}>
                <button onClick={() => goTo("/",this.props)}><ArrowSVG/></button>             
                <button onClick={() => goTo("/",this.props)}>Index</button>             
                <button onClick={() => goTo("/",this.props)}>Next</button>             
              </section>       
                    
                    <section onClick={() => this.toggleMenu()}className="blogPost">
                        <h2>{this.state.blogPost.title}</h2>
                    {/* Might look up for sanitizer like purify */}
                        <div dangerouslySetInnerHTML={{
                       __html: this.state.blogPost.htmlText
                    }} /> 
                    </section>
                    <section className="commentSection">
                        <CommentForm blogId={this.state.blogPost.id}/>
                        <Comments blogId={this.state.blogPost.id}/>
                    </section>
            </div>
      );    
    }
}

const mapStateToProps = (state,ownProps) =>{
    state.data = [...state.data] 
console.log(ownProps);
console.log("blogpost");
    return {
        notesListData: state.data,
        // notesListData: state.blogPost.data,
        blogId: state.data
    }
}   

export default connect(
    mapStateToProps,
)(BlogPost)