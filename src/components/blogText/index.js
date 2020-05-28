import React, {Component} from 'react';
import {connect} from "react-redux";
import "./index.scss";
import { statements } from '@babel/template';

class BlogText extends Component{

    // state= {
    //     list: this.props.notesListData
    // }
     
    render(){
        return (
            <div>
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