import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
import { statements } from '@babel/template';
import {goTo} from "../../helper/routing";

class BlogText extends Component{

    // state= {
    //     list: this.props.notesListData
    // }

    constructor(props){
        super(props);
    }
     
    render(){
        return (
            <div>
                <button onClick={() => goTo("/",this.props)}>Back To</button>
                     Ok you noob. Do the staff
            </div>
      );    
    }
}


// const mapStateToProps = (state, componentProps) =>{
//     state.data = [...state.data] 
//     return {
//         notesListData: state.data.map((element) =>{
//             return element
//         })
//     }
// }

// export default connect(
//     mapStateToProps,
// )(Blog);

export default BlogText;