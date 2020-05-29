import React, {Component} from 'react';
import {connect} from "react-redux";
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
        let blogPost =  this.state.list.find(element => element.id == location.search.substring(1));
        this.setState({
            blogPost
        })
    }
     
    render(){
        console.log(this.state.blogPost);
        return (
            <div>
                <button onClick={() => goTo("/",this.props)}>Back To</button>             
                    <section>
                        <h2>{this.state.blogPost.id}</h2>
                    </section>
                   {  console.log(this.props)}
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