    import React from "react";
    import { useSelector,useDispatch } from "react-redux";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
    import { decrementItemQuantity, incrementItemQuantity, removeFromCart } from "../redux/actions/cart-actions";

    const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 5;
    const tax = 5;
    const dispatch = useDispatch();

    const handleDeleteItem = (itemId) => {
        const itemToDelete = cartItems.find((item) => item.id === itemId);
        if (itemToDelete) {
          dispatch(removeFromCart(itemId));
          dispatch(decrementItemQuantity(itemId, itemToDelete.quantity));
        }
      };
    const handleIncrementQuantity = (itemId) => {
        dispatch(incrementItemQuantity(itemId)); 
    }
    const handleDecrementQuantity = (itemId) => {
        dispatch(decrementItemQuantity(itemId));
    }

    return (
        <div className="cart-container" style={{ display: "flex", margin:"30px" }}>
        <div className="cart-items" style={{ flex: "1" }}>
            {cartItems.length > 0 ? (
            cartItems.map((item) => (
                <div
                key={item.id}
                className="container cart-item"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    padding: "20px",
                    maxWidth:"90%",
                    marginLeft:"70px"
                }}
                >
                <div
                    className="wrapper"
                    style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginRight: "20px",
                    }}
                >
                    <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                    style={{ width: "150px" }}
                    />
                    <div style={{marginLeft:"30px"}}>
                    <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                        Brand
                    </p>
                    <p
                        className="item-title"
                        style={{ fontSize: "20px", color: "#999999" }}
                    >
                        {item.title}
                    </p>
                    <p
                        className="item-price"
                        style={{ fontSize: "25px", color: "#999999" }}
                    >
                        ${item.price}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", marginBottom:"-15px" }}>
                    <p style={{ marginRight: "10px",marginTop:"10px",color: "#666666",fontSize:"20px" }}>Quantity:</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button onClick={() => handleDecrementQuantity(item.id)}
                      style={{
                        width: "30px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}>
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        style={{
                          width: "40px",
                          textAlign: "center",
                          border: "1px solid #ccc",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      <button onClick={() => handleIncrementQuantity(item.id)}
                      style={{
                        width: "30px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                </div>
                <button
                    className="delete-icon"
                    style={{ cursor: "pointer", alignSelf: "flex-start",backgroundColor:"transparent",border:"none" }}
                    onClick={() => handleDeleteItem(item.id)}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                </div>
            ))
            ) : (
            <p className="text-center" style={{fontSize:"35px"}}>Your cart is empty.</p>
            )}
        </div>
        {cartItems.length > 0 && (
            <div
            className="order-summary"
            style={{
                marginLeft: "30px",
                flex: "0.5",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "20px",
                height:"100%",
                marginRight: "70px",
            }}
            >
            <h2 >Order Summary</h2>
            <div className="summary-item"style={{ marginBottom: "10px",color: "#999999" }}>
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-item" style={{ marginBottom: "10px",color: "#999999" }}>
                <span className="summary-label">Shipping Estimate</span>
                <span className="summary-value">${shipping}</span>
            </div>
            <div className="summary-item" style={{ marginBottom: "10px",color: "#999999" }}>
                <span className="summary-label">Tax Estimate</span>
                <span className="summary-value">${tax}</span>
            </div>
            <div className="summary-item" style={{ marginBottom: "10px",fontSize:"25px" }}>
                <span className="summary-label">Order Total</span>
                <span className="summary-value">${parseInt(totalPrice + shipping + tax)}</span>
            </div>
            </div>
        )}
        </div>
    );
    };

    export default Cart;
