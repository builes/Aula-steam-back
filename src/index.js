import express from "express";
import cors from "cors";
import cursosRouter from "./routes/cursos.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

app.use("/api/cursos", cursosRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/api/cursos`);
});
