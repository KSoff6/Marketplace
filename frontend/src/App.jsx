// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "@pages/Home";
// import LoginPage from "@pages/Login";
// import Register from "@pages/Register";
// import Cart from "@pages/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "login",
//     element: <LoginPage />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
//   {
//     path: "register",
//     element: <Register />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

// src/App.jsx
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Marketplace</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
