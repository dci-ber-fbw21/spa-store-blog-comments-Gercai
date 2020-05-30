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

        console.log(this.props)
        console.log("CommentSection is mounting...");
        this.setState({
            commentMount: true,
        })
    }   

    componentDidUpdate(){
        console.log(this.props);
        console.log("Comments are Updating");
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
     
    render(){
        return (
            <div> 
                <section className="comments">
                    <h2>comments Below</h2>
                        {
                            this.state.comments.map((comment) =>
                            
                            <article>
                            
                            <p>{comment}</p>
                           
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
        // notesListData: state.blogPost.data,
        blogId
    }
}   


export default connect(
    mapStateToProps,
)(CommentSection)
