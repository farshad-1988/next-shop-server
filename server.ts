import express from "express";
import jsonServer from "json-server";

const app = express();

// Create json-server router and middlewares
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Optional: Add custom routes before json-server
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    endpoints: {
      products: "/api/products",
      users: "/api/users",
      orders: "/api/orders",
    },
  });
});

// Optional: Custom middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use json-server
app.use("/api", middlewares);
app.use("/api", router);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("API available at http://localhost:3000/api");
  console.log("\nEndpoints:");
  console.log("  GET    /api/products");
  console.log("  GET    /api/products/:id");
  console.log("  POST   /api/products");
  console.log("  PUT    /api/products/:id");
  console.log("  PATCH  /api/products/:id");
  console.log("  DELETE /api/products/:id");
});
