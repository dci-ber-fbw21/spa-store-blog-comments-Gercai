import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
import {goTo} from "../../helper/routing";

class Blog extends Component{

    state= {
        list: this.props.notesListData,
        comments: 0
    }

componentDidMount(){
     this.setState({
            list: this.props.notesListData
        })
    }

    render(){
        let noComments = "No comments yet, be first to post";
        return (
            <div>
                 <h1>Blog Overview</h1>
                <article>
                    {/* {console.log(this.state.list)} */}
                {
             this.state.list && this.state.list.map((element) => {
                    return ( 
                        <section onClick={() => goTo("/blogPost", this.props, element.id)} className="blogPart">
                      
                       <h1>{element.title}</h1>
                       {element.comments.length>0?
                       <p>
                           {element.comments.length>1?
                            <span>There are {element.comments.length} comments</span>:
                            <span>There is {element.comments.length} comment</span>
                           }
                        </p>: 
                       <p>{noComments}</p>
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
