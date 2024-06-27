const { handler } = require("./getStudents");

async function test() {
  const event = {}; // You can simulate event data if needed
  const context = {}; // You can create a mock context object if needed

  try {
    const response = await handler(event, context);
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

test();
