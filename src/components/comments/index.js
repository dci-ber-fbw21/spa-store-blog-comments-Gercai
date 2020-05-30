import React, {Component} from 'react';
import {connect} from "react-redux";

import "./index.scss";
class CommentSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            commentMount: false,
            blogPost: [],
            commentInput: "",
            comments: [],
        }
    }

    componentDidMount(){

        this.setState({
            commentMount: true,
        })
    }   

    componentDidUpdate(){
        let blogPost =  this.state.list.find(element => element.id === this.props.blogId)
        console.log(blogPost);

        if(this.state.commentMount === true)
        {
        this.setState({
                comments: blogPost.comments,
                commentMount: false
            })
        }
}


    deleteComment = index =>{

        console.log("here i am ");
        this.sendPackage(this.props.blogId,index);

    }

    sendPackage = (blogId,indexOfComment) =>{

        console.log(blogId);
        console.log(indexOfComment);

        this.props.deleteComment(indexOfComment,blogId);

    }

    render(){
        return (
            <div> 
                <section className="comments">
                    <h2>comments Below</h2>
                        {
                            this.state.comments.reverse().map((comment,index) =>
                            <article>
                            <p>{comment.date}</p>
                            <p>{comment.text}</p>
                            <button name="delete" onClick={() => this.deleteComment(index)}>Delete</button>  
                            </article>
                            )
                        }
                </section>
            </div>
      );    
    } 
}



const mapStateToProps = (state, ownProps) =>{
    const {blogId} = ownProps; 
    return {
        notesListData: state.data,
        blogId
    }
}   


const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (indexOfComment,blogId) => {
            
            const action ={
                type: "DELETE_COMMENT",
                payload: { 
                indexOfComment,
                blogId
            }
        }
        dispatch(action)
        }
  }};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentSection)
