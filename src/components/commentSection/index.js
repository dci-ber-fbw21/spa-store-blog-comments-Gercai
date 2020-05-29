import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
class CommentSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogPost: []
        }
    }

    componentDidMount(){
        // Add comments from the right array. 
    }

    handleSubmit = event => {
        event.preventDefault();
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
    };

    sendPackage = (commentPackage) => {

        console.log(commentPackage);
    }
     
    render(){
        console.log(this.state.blogPost);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="commentField">
                   
                   <div className="comment">
                    <label for="textarea">Leave a Comment</label>
                    <textarea id="textarea" rows="5"></textarea>
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

// const mapStateToProps = (state) =>{
//     state.data = [...state.data] 
//     return {
//         notesListData: state.data
//     }
// }   

// export default connect(
//     mapStateToProps,
// )(BlogPost)

export default CommentSection;