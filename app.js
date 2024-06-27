const express = require("express");
const cors = require("cors");
const app = express();

// Import and use your edge function
const { handler } = require("./getStudents");

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization, Cookie",
};
app.use(cors(corsOptions));

app.get("/api/students", async (req, res) => {
  const response = await handler(req, res);
  res.status(response.statusCode).json(JSON.parse(response.body));
});

app.listen(8000, () => {
  console.log("Local server running on http://localhost:3000");
});
