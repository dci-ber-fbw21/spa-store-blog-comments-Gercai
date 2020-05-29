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
     
    render(){
        console.log(this.state.blogPost);
        return (
            <div>
                <form>
                    <fieldset className="commentField">
                   
                   <div className="comment">
                    <label for="textarea">Leave a Comment</label>
                    <textarea id="textarea" rows="5"></textarea>
                  </div>
                  <div className="commentButtons">
                    <button name="clear">Clear</button>
                    <button name="addComment">Add Comment</button>
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