import React, { useState, useEffect } from "react";

const CartCode = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/Cart.json')
            .then(response => response.json())
            .then(data => {
                setCartItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the cart data:', error);
                setLoading(false);
            });
    }, []);

    const increaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.image}
                                                className="img-fluid me-5 rounded-circle"
                                                style={{ width: '80px', height: '80px' }}
                                                alt=""
                                            />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">{item.name}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">${item.price.toFixed(2)}</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                            <div className="input-group-btn">
                                                <button
                                                    className="btn btn-sm btn-minus rounded-circle bg-light border"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm text-center border-0"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <div className="input-group-btn">
                                                <button
                                                    className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                    onClick={() => increaseQuantity(item.id)}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">${(item.price * item.quantity).toFixed(2)}</p>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-md rounded-circle bg-light border mt-4"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        className="border-0 border-bottom rounded me-5 py-3 mb-4"
                        placeholder="Coupon Code"
                    />
                    <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
                        Apply Coupon
                    </button>
                </div>
                <div className="row g-4 justify-content-end">
                    <div className="col-8"></div>
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div className="bg-light rounded">
                            <div className="p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="mb-0 me-4">Subtotal:</h5>
                                    <p className="mb-0">${calculateTotal()}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-0 me-4">Shipping</h5>
                                    <div className="">
                                        <p className="mb-0">Flat rate: $3.00</p>
                                    </div>
                                </div>
                                <p className="mb-0 text-end">Shipping to Ukraine.</p>
                            </div>
                            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 className="mb-0 ps-4 me-4">Total</h5>
                                <p className="mb-0 pe-4">${(parseFloat(calculateTotal()) + 3).toFixed(2)}</p>
                            </div>
                            <button
                                className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                type="button"
                            >
                                Proceed Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default CartCode;
