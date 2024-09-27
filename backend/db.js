const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:%23Sarthak12345@cluster0.dnlkl.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDBconnect = async () => {
  try {
    // Connecting to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully");

    // Fetching the food_items collection
    const fetched_items = mongoose.connection.db.collection("food_items");
    const data = await fetched_items.find({}).toArray(); // Fetch all food items
    global.food_items = data; // Store data in global variable

    // Fetching the foodCategory collection
    const fetched_categories = mongoose.connection.db.collection("food_category");
    const categoryData = await fetched_categories.find({}).toArray(); // Fetch all food categories
    global.foodCategory = categoryData; // Store categories in global variable

    console.log("Data fetched successfully");
  } catch (err) {
    // Logging any errors
    console.error("Failed to connect to MongoDB", err);
  }
};

// Exporting the mongoDBconnect function
module.exports = mongoDBconnect;
