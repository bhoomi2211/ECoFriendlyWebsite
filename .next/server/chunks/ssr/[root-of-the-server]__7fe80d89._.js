module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context/CartContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const { createContext, useState, useContext, useEffect } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const CartContext = createContext();
const CartProvider = ({ children })=>{
    const [cartItems, setCartItems] = useState([]);
    // Load cart from localStorage on mount
    useEffect(()=>{
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);
    // Save cart to localStorage whenever it changes
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [
        cartItems
    ]);
    // Add product to cart
    const addToCart = (product)=>{
        setCartItems((prev)=>{
            const existing = prev.find((item)=>item._id === product._id);
            if (existing) {
                return prev.map((item)=>item._id === product._id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };
    // Remove product from cart
    const removeFromCart = (productId)=>{
        setCartItems((prev)=>prev.filter((item)=>item._id !== productId));
    };
    // Clear all cart items
    const clearCart = ()=>{
        setCartItems([]);
    };
    // Update quantity of a product
    const updateQuantity = (productId, quantity)=>{
        setCartItems((prev)=>prev.map((item)=>item._id === productId ? {
                    ...item,
                    quantity
                } : item));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            clearCart,
            updateQuantity
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.jsx",
        lineNumber: 57,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const UseCartContext = ()=>useContext(CartContext);
const __TURBOPACK__default__export__ = UseCartContext;
}),
"[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/Navbar.jsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7fe80d89._.js.map