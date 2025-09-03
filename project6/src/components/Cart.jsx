import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
    const cartCheckboxId = useId()

    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon></CartIcon>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden/>

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp" alt="iphone" />
                        <div>
                            <strong>iPhone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon></ClearCartIcon>
                </button>
            </aside>
        </>
    )
}