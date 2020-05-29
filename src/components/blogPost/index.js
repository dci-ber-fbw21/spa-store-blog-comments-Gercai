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
            blogPost: []
        }
    }

    componentDidMount(){
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
                        <CommentForm blogID={this.state.blogPost.id}/>
                        <Comments blogID={this.state.blogPost.id}/>
                    </section>
            </div>
      );    
    }
}

const mapStateToProps = (state) =>{
    state.data = [...state.data] 
    return {
        notesListData: state.data
    }
}   

export default connect(
    mapStateToProps,
)(BlogPost)