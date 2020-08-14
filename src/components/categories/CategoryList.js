import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryAcitons"
import * as productActions from "../../redux/actions/productActions"
import { ListGroup, ListGroupItem, Badge, Col } from 'reactstrap'

class CategoryList extends Component {

    componentDidMount() {

        this.props.actions.getCategories()

    };

    selectCategory=(category)=>{
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    }


    render() {
        return (
            <div>
                <h3><Col xs="12"><Badge color="warning" style={{paddingRight:"25%",paddingLeft:"25%",cursor:"default"}}>Kategoriler</Badge></Col></h3>
                <ListGroup>
                    {this.props.categories.map(r => (

                        <ListGroupItem  style={{cursor:"pointer"}}  active={this.props.currentCategory === r} onClick={() =>this.selectCategory(r)} key={r.id}>
                            {r.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

