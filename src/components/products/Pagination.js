import React, { Component } from 'react'
import * as productActions from "../../redux/actions/productActions"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'


 class Pagination extends Component {
 
  state = {
    pageNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  changePageEvent=(currentPage,number)=>{
        
    var activePageButton=document.getElementsByClassName("page-item page-link");   

    activePageButton[currentPage-1].style.backgroundColor="#fff";
    activePageButton[currentPage-1].style.color="#007bff";

    activePageButton[number-1].style.backgroundColor="#007bff";
    activePageButton[number-1].style.color="white";
    this.props.actions.changePage(number);
    
}
  render() {

    return (
      <nav>
        <ul className='pagination mt-5 ml-5'>
          {this.state.pageNumbers.map(number => (
            <li key={number} style={{cursor: "pointer"}} onClick={() => this.changePageEvent(this.props.currentPage,number)} className='page-item page-link'>  
                {number}
           
            </li>
          ))}
        </ul>
      </nav>
    );
  };
}


function mapStateToProps(state) {
  return {

      currentPage:state.productPaginationReducer

  }
}
function mapDispatchToProps(dispatch) {
  return {
      actions: {
        changePage: bindActionCreators(productActions.changePage, dispatch),
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)
