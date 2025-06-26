import FoodModel from '../models/FoodModel.js'

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    const image_filename = req.file.filename;

    const food = new FoodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
      unit: req.body.unit,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });

  } catch (error) {
    console.error("❌ Error saving food:", error);  // LOG FULL ERROR
    res.status(500).json({ success: false, message: error.message }); // RETURN ERROR TO CLIENT
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await FoodModel.find(); // Fetch all items from DB
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("❌ Error fetching food list:", error);
    res.status(500).json({ success: false, message: "Failed to fetch food items" });
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.body.id);
    
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Delete the image file from server
    fs.unlink(`uploads/${food.image}`, () => {});

    // Delete from database
    await FoodModel.findByIdAndDelete(req.body.id);
    
    res.json({ success: true, message: "Food Removed" });

  } catch (error) {
    console.error("❌ Error deleting food:", error);
    res.status(500).json({ success: false, message: "Failed to delete food item" });
  }
}

export {addFood, listFood, deleteFood}
