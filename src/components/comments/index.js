import React, {Component} from 'react';
import {connect} from "react-redux";

import "./index.scss";
class CommentSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogPost: [],
            commentInput: ""
        }
    }

    componentDidMount(){
        // Add comments from the right array. 
    }
     
    render(){
        return (
            <div> 
                <section className="comments">
                    comments Below
                    {this.state.notesListData}

                </section>
            </div>
      );    
    }
}

// const mapStateToProps = (state) =>{
  
//     return {
//         notesListData: state.data
//     }
// }   

// const mapStateToProps = (state, componentProps) => {
//     // return {
//     //   // counter: state.counter
//     // }
//     // console.log(state);
//   }


export default connect(
    // mapStateToProps,
)(CommentSection)
