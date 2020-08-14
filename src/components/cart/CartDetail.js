import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as cartActions from "../../redux/actions/cartActions"

class CartDetail extends Component {

    renderCart() {

        return (
            <div>
            <h2  style={{paddingBottom:30}}>Sepetim </h2>

            <Table striped>
              
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Adet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
               
                        this.props.cart.map(cartItem => (

                            <tr key={cartItem.product.id}>

                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button style={{float: 'right'}} color="warning"onClick={ () => this.props.actions.removeFromCart(cartItem.product)}>Sepetten Çıkar</Button></td>

                            </tr>
                        ))

                    }

                </tbody>

            </Table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}

            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        cart:state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartDetail)