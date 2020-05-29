import React, {Component} from 'react';
import {connect} from "react-redux";

import "./index.scss";
class CommentSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.notesListData,
            blogPost: [],
            commentInput: "",
            comments: [],
            count: 1,
        }

    }

    componentDidMount(){
    }   

    componentDidUpdate(){
        // console.log(this.props.blogID);
        // let count = blogPost.comments.length +1;
        let blogPost =  this.state.list.find(element => element.id === this.props.blogID)
        let count = this.state.count;
        console.log(blogPost.comments.length);
        console.log(this.state.count);

        if(blogPost.comments.length===this.state.count){
            this.setState({
                comments: blogPost.comments,
                count: count +1
            })
        }

        // console.log(count);
    }
     
    render(){
        return (
            <div> 
                <section className="comments">
                    <h2>comments Below</h2>
                        {
                            this.state.comments.map((comment) =><p>{comment}</p>)
                        }
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

const mapStateToProps = (state) =>{
    state.data = [...state.data] 
    return {
        notesListData: state.data
    }
}   


export default connect(
    mapStateToProps,
)(CommentSection)
