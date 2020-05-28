import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
import {goTo} from "../../helper/routing";

class Blog extends Component{

    constructor(props){
        super(props);
    }

    state= {
        list: this.props.notesListData
    }

    render(){

      
        let comments = "No comments yet, be first to post";
        return (
            <div>
                <article>
                <h1>Blog Overview</h1>
                    {/* {console.log(this.state.list)} */}
                {
                this.state.list && this.state.list.map((element) => {
                        
                    return ( 
                       <section onClick={() => goTo("/blogText",this.props, element.id)} className="blogPart">
                      
                       <h1>{element.title}</h1>
                       {!element.comment?
                       <p>{comments}</p>: 
                       <p>We have comments</p>
                       }
                       </section>
                        )
                    
                })
                }
                </article>
            </div>
      );    
    }
 
}


const mapStateToProps = (state, componentProps) =>{
    state.data = [...state.data] 
    return {
        notesListData: state.data.map((element) =>{
            return element
        })
    }
}

export default connect(
    mapStateToProps,
)(Blog);
