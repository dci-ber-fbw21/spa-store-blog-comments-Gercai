import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentForm from "../commentForm";
import Comments from "../comments";
import "./index.scss";
import {goTo} from "../../helper/routing";
class BlogPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogId: this.props.blogId,
            blogPost: []
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

    render(){
        return (
            <div>
                <button onClick={() => goTo("/",this.props)}>Back To</button>             
                    <section className="blogPost">
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