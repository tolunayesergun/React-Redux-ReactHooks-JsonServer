import React, { Component } from 'react'
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from 'react-router-dom';
class CartSummary extends Component {

    sepeteGit = () => {

    }

  
    renderSummary = () => {
        var cartTotal=0;
        this.props.cart.map(cartItem => (

           cartTotal+=cartItem.quantity
         ))

        return (
            <UncontrolledDropdown onDoubleClick={() => this.sepeteGit()} inNavbar>
                <DropdownToggle className="text-muted" nav caret>
                    Sepetim ({cartTotal})
            </DropdownToggle>

                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (

                            <DropdownItem toggle={false} key={cartItem.product.id}>
                                <Badge style={{ marginRight: 6 }} onClick={() => this.props.actions.removeFromCart(cartItem.product)} color="danger">X</Badge>
                                {cartItem.product.productName}
                                <Badge style={{ marginLeft: 6 }} color="info">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem>
                        <Link to="/cart">Sepete Git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    renderNotSummary = () => {

        return (
            <UncontrolledDropdown inNavbar>
                <Link to="/cart" style={{ paddingRight: 16, paddingTop: 8, fontSize: 16 }} className="text-muted" nav caret>
                    Sepetim
            </Link>
            </UncontrolledDropdown>
        );
    }

    render() {

        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderNotSummary()}
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)