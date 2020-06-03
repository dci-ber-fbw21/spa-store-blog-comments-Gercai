import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentForm from "../commentForm";
import Comments from "../comments";
import "./index.scss";
import {goTo, reLoad} from "../../helper/routing";

import { withRouter } from "react-router-dom";

import {ReactComponent as ArrowSVG} from "../../svg/arrow.svg";
import {ReactComponent as HomeSVG} from "../../svg/home.svg";



class BlogPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogId: this.props.blogId,
            switchIds: [],
            blogPost: [],
            toggle: true
        }
    }

    componentDidMount(){

        document.body.addEventListener('wheel', this.handleScroll)

        let location = this.props.location;
        let blogPost =  this.state.list.find(element => element.id === location.search.substring(1));
        let switchId = this.state.list.indexOf(blogPost);

        let before =   switchId > 0? switchId - 1: 0;
        let after =    switchId < this.state.list.length -1? switchId + 1 : this.state.list.length - 1;
          
        let switchIds = [
            this.state.list[before].id,
            this.state.list[after].id
        ];

        this.setState({
            blogPost,
            switchIds
        })
    }
    componentDidUpdate(){

        let location2 = this.props.location;
        let blogPost2 =  this.state.list.find(element => element.id === location2.search.substring(1));
        let switchId = this.state.list.indexOf(blogPost2);
        let before =   switchId > 0? switchId - 1: 0;
        let after =    switchId < this.state.list.length -1? switchId + 1 : this.state.list.length - 1;
        let switchIds = [
            this.state.list[before].id,
            this.state.list[after].id
        ];

        let location = this.props.location;
        let blogPost =  this.state.list.find(element => element.id === location.search.substring(1));
   if(blogPost !== this.state.blogPost)
        this.setState({
            blogPost,
            switchIds
        })

    }

    componentWillUnmount(){

        document.body.removeEventListener('wheel', this.handleScroll)

    }

    handleScroll = (event) => {

        let checkToggle = this.checkScrollDirection(event)?
        true:false;

        if(checkToggle!==this.state.toggle)
        this.setState({
             toggle:checkToggle
        })
    
    }

    checkScrollDirection(event){
       return event.wheelDelta?
             event.wheelDelta> 0:
             event.deltaY < 0;
    }

    toggleMenu = () => {
       let checkToggle = this.state.toggle?false:true;
       this.setState({
            toggle:checkToggle
        })
    }

    render(){  

        console.log(this.state.blogPost.id + "Comment Update");
           

        return (
            <div className="postContainer">
              <section className={`menu ${this.state.toggle?"toggle":"hide"}`}>
                <button onClick={() => reLoad("/blogPost", this.props, this.state.switchIds[0])}><ArrowSVG/></button>             
                <button onClick={() => goTo("/",this.props)}><HomeSVG/></button>             
                <button onClick={() => goTo("/blogPost",this.props,this.state.switchIds[1])}><ArrowSVG/></button>             
              </section>       
                    <section onClick={() => this.toggleMenu()}className="blogPost">
                        <h2>{this.state.blogPost.title}</h2>
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
    return {
        notesListData: state.data,
        // blogId
    }
}   

export default withRouter(connect(
    mapStateToProps,
)(BlogPost));