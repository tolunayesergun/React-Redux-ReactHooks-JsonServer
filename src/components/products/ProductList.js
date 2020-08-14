import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as cartActions from "../../redux/actions/cartActions"
import * as productActions from "../../redux/actions/productActions"
import alertify from 'alertifyjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './Pagination'
import {Link} from "react-router-dom"

class ProductList extends Component {

    state = {
        sortingMethod: true
    }

    componentDidMount() {

        this.props.actions.getProducts()

    };

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
        alertify.success(product.productName + " Sepete Eklendi");
    }

    changeSortingMethod() {

        this.setState(oldState => ({ sortingMethod: !oldState.sortingMethod }))

    }


    ListSorting = () => {
        return (
            <div>
                <Row>
                    <Col xs="10">
                        <h3><Badge onClick={() => this.changeSortingMethod()} style={{ marginLeft: 10 }} color="success">{this.props.currentCategory.categoryName ? this.props.currentCategory.categoryName + " Ürünleri" : this.props.currentCategory.categoryName}</Badge></h3>
                    </Col>
                    <Col xs="1">
                        <h4><Badge onClick={() => this.changeSortingMethod()} active={this.state.sortingMethod === 1} style={{ marginLeft: 30, cursor: "pointer" }} color="light" >  <FontAwesomeIcon icon="th-large" /> </Badge></h4>
                    </Col>
                    <Col xs="1">
                        <h4><Badge style={{ cursor: "pointer" }} color="primary">  <FontAwesomeIcon icon="list" /> </Badge></h4>
                    </Col>
                </Row>

                <Table>
                    <thead>
                        <tr>
                            <th>Görsel</th>
                            <th>id</th>
                            <th>Ürün Adı</th>
                            <th>Fiyatı</th>
                            <th>Stok</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(p =>
                            <tr key={p.id}>
                                <td><Link to={"/saveproduct/"+p.id}><img style={{ width: 100, height: 100 }} src={require('../../Images/' + p.imageName)} alt={p.imageName} /></Link></td>
                                <td>{p.id}</td>
                                <td>{p.productName}</td>
                                <td>{p.unitPrice}</td>
                                <td>{p.unitsInStock}</td>
                                <td> <Button color="info" onClick={() => this.addToCart(p)}>Sepete Ekle</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }

    GroupSorting = () => {
        return (
            <div>
                <Row>
                    <Col xs="10">
                        <h3><Badge style={{ marginLeft: 10 }} color="success">{this.props.currentCategory.categoryName ? this.props.currentCategory.categoryName + " Ürünleri" : this.props.currentCategory.categoryName}</Badge></h3>
                    </Col>
                    <Col xs="1">
                        <h4><Badge active={this.state.sortingMethod === 1} style={{ marginLeft: 30, cursor: "pointer" }} color="primary" >  <FontAwesomeIcon icon="th-large" /> </Badge></h4>
                    </Col>
                    <Col xs="1">
                        <h4><Badge onClick={() => this.changeSortingMethod()} id="typeList" style={{ cursor: "pointer" }} color="light">  <FontAwesomeIcon icon="list" /> </Badge></h4>
                    </Col>
                </Row>

                <hr/>
                <Row>

                    {this.props.products.slice( (  (this.props.currentPage) * 10 )-10,((  (this.props.currentPage)) * 10)-1).map(p =>
                        <Col xs="4" className='mt-5'>
                            <Card className="align-items-center" style={{ padding: 25 }}>
                            <Link to={"/saveproduct/"+p.id}><CardImg top src={require('../../Images/' + p.imageName)} alt={p.imageName} /></Link> 
                                <CardBody>
                                    <CardTitle>{p.productName}</CardTitle>
                                    <CardSubtitle>{p.unitPrice}</CardSubtitle>
                                    <CardText>{this.props.categories[p.categoryId-1].categoryName}  {p.productName}</CardText>
                                    <Button style={{ paddingLeft: 30, paddingRight: 30 }} color="info" onClick={() => this.addToCart(p)}>Sepete Ekle</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.props.currentCategory.categoryName ?
                    <div style={{ cursor: "default", border: "solid 1px #e5e5e5", borderRadius: "8px", padding: "20px" }}>
                        {this.state.sortingMethod ? this.GroupSorting() : this.ListSorting()}
                      <Row>
                        <Pagination />
                        </Row>
                    </div>
                    : ""}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
        categories: state.categoryListReducer,
        currentPage:state.productPaginationReducer

    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)