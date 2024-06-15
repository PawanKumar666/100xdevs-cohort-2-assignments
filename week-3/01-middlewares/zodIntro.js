const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

const schemaValues = zod.array(zod.string()); // Input should be an array of strings

// Refer zod documantation for more info - https://zod.dev/

const validateNameParamInBody = (value) =>
  ["pawan", "kumar"].includes(value.toLowerCase());

const entireBodySchema = zod.object({
  values: schemaValues,
  name: zod.string().refine(validateNameParamInBody, {
    message: "Name must be 'pawan' or 'kumar' (case insensitive)",
  }), // Case insensitive check
});
app.post("/", (req, res) => {
  bodyValues = entireBodySchema.safeParse(req.body);
  if (!bodyValues) {
    return res.status(400).json({ error: "Invalid input" });
  } else {
    res.send(bodyValues);
  }
});

app.listen(3002);
