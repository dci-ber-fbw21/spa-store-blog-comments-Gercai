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
        
            Put you comments in here
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