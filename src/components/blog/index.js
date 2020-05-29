import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
import {goTo} from "../../helper/routing";

class Blog extends Component{

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
                       <section onClick={() => goTo("/blogPost",this.props, element.id)} className="blogPart">
                      
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

const mapStateToProps = (state) =>{
    state.data = [...state.data] 
    return {
        notesListData: state.data
    }
}

export default connect(
    mapStateToProps,
)(Blog);
