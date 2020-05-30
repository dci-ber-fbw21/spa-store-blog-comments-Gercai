import React, {Component} from 'react';
import {connect} from "react-redux";


import "./index.scss";
class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            commentInput: "",
        }
    }

    componentDidMount(){
        // Add comments from the right array. 
    }


    handleForm = event => {
        event.preventDefault();
    }
    handleSubmit = event => {
    }

    handleClear = event =>  {
        document.querySelector("textarea").value = "";
    }

    processData = () => {
       let comment = document.querySelector("textarea").value;
       let date = new Date();
       let commentPackage = {text:comment,
                             date:date.toDateString()};
       this.sendPackage(commentPackage);
       document.querySelector("textarea").value = "";
    };

    sendPackage = (commentPackage) => {
        this.props.addComment(commentPackage,this.props.blogId);
    }
     
    render(){
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <fieldset className="commentField">
                   <div className="comment">
                    <label for="textarea">Leave a Comment</label>
                    <textarea id="textarea" rows="5"
                    
                    onChange={
                        (e)=>{
                        this.setState(
                            { commentInput: e.target.value}
                            )
                        }
                    }
                    ></textarea>
                  </div>
                  <div className="commentButtons">
                    <button name="clear" onClick={() => this.handleClear()}>Clear</button>
                    <button name="addComment" onClick={() => this.processData()}>Add Comment</button>
                  </div>
                    </fieldset>
                </form>
            </div>
      );    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (commentPackage,blogId) => {
            
            const action ={
                type: "ADD_COMMENT",
                payload: { 
                commentPackage: commentPackage,
                blogId
            }
        }
        dispatch(action)
        }
  }};

export default connect(
    null,
    mapDispatchToProps,
)(CommentForm)
