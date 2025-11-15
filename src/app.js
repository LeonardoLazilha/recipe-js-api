import express from 'express';
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();

app.use(express.json());

app.use("/recipes", recipeRoutes);

export default app;