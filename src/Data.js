const data = [
  // Existing food items...

  {
    id: "1",
    name: "Butter Chicken",
    rating: 4.8,
    recipe: `Butter Chicken is a popular Indian dish made with tender chicken cooked in a rich and creamy tomato-based sauce. The chicken is marinated in spices, then simmered in a flavorful blend of tomatoes, butter, and cream. It is a delicious and comforting dish, often served with naan or rice`,
    ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
    veg: false,
    price: "$12.99",
    description: "Tender chicken cooked in a rich and creamy tomato-based sauce.",
    // Add any additional properties you'd like
  },
  {
    id: "2",
    name: "Biryani",
    rating: 4.7,
    recipe: `Butter Chicken is a popular Indian dish made with tender chicken cooked in a rich and creamy tomato-based sauce. The chicken is marinated in spices, then simmered in a flavorful blend of tomatoes, butter, and cream. It is a delicious and comforting dish, often served with naan or rice`,
    ingredients: ["Basmati Rice", "Meat (Chicken/Mutton)", "Spices", "Onions", "Yogurt"],
    veg: false,
    price: "$10.99",
    description: "Fragrant rice dish with meat and aromatic spices.",
    // Add any additional properties you'd like
  },
  {
    id: "3",
    name: "Samosa",
    rating: 4.5,
    recipe: `Samosa is a popular Indian snack with a crispy pastry shell. The recipe includes a filling made of spiced potatoes and peas, which is then sealed and deep-fried until golden brown. It is served hot and pairs well with chutneys or sauces.`,
    ingredients: ["Potatoes", "Peas", "Spices", "Pastry Dough", "Oil"],
    veg: true,
    price: "$3.99",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    // Add any additional properties you'd like
  },
  {
    id: "4",
    name: "Butter Chicken",
    rating: 4.5,
    recipe: `Butter Chicken is a popular Indian dish made with tender chicken cooked in a rich and creamy tomato-based sauce. The chicken is marinated in spices, then simmered in a flavorful blend of tomatoes, butter, and cream. It is a delicious and comforting dish, often served with naan or rice`,
    ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
    veg: false,
    price: "$12.99",
    description: "Tender chicken cooked in a rich and creamy tomato-based gravy.",
    // Add any additional properties you'd like
  },
  {
    id: "5",
    name: "Biryani",
    rating: 4.8,
    recipe: `Biryani is a flavorful rice dish made with aromatic basmati rice, meat (such as chicken or mutton), and a blend of spices like cumin, coriander, and garam masala. The ingredients are cooked together in layers, creating a fragrant and delicious one-pot meal that is loved for its rich taste and complexity of flavors.`,
    ingredients: ["Basmati Rice", "Chicken/Mutton/Vegetables", "Spices", "Onions", "Ghee"],
    veg: false,
    price: "$10.99",
    description: "Aromatic rice dish with flavorful meat or vegetables and a blend of spices.",
    // Add any additional properties you'd like
  },
  {
    id: "6",
    name: "Masala Dosa",
    rating: 4.7,
    recipe: `Masala Dosa is a popular South Indian dish. It is a thin and crispy pancake made from a fermented batter of rice and urad dal. The dosa is filled with a flavorful mixture of spiced potatoes and onions. It is typically served with coconut chutney and sambar, a lentil-based vegetable stew.`,
    ingredients: ["Rice", "Urad Dal", "Potato", "Onion", "Spices"],
    veg: true,
    price: "$7.99",
    description: "Thin and crispy pancake stuffed with spiced potato filling.",
    // Add any additional properties you'd like
  },

  {
    id: "7",
    name: "Paneer Tikka",
    rating: 4.6,
    recipe: `To make Paneer Tikka, marinate cubes of paneer (Indian cottage cheese) with bell peppers, yogurt, spices, and lemon juice. Skewer the marinated paneer and vegetables and grill them until golden and slightly charred. Serve hot as an appetizer or with naan bread and chutney.`,
    ingredients: ["Paneer (Indian Cottage Cheese)", "Bell Peppers", "Yogurt", "Spices", "Lemon Juice"],
    veg: true,
    price: "$9.99",
    description: "Grilled pieces of marinated paneer and vegetables with a smoky flavor.",
    // Add any additional properties you'd like
  },
  {
    id: "8",
    name: "Chole Bhature",
    rating: 4.9,
    recipe: `Chhole Bhature is a popular North Indian dish consisting of spicy chickpeas (chhole) cooked in a flavorful gravy, served with deep-fried bread (bhature). The dish is rich in spices and flavors, making it a delicious and satisfying meal.`,
    ingredients: ["Chickpeas", "Onion", "Tomato", "Spices", "All-Purpose Flour"],
    veg: true,
    price: "$8.99",
    description: "Spiced chickpeas served with deep-fried bread called bhature.",
    // Add any additional properties you'd like
  },
  {
    id: "9",
    name: "Pani Puri",
    rating: 4.7,
    recipe: `Pani Puri is a popular Indian street food. It consists of small crispy puris filled with a mixture of potatoes and chickpeas. It is served with tangy spiced water and topped with tamarind chutney. This delightful snack offers a burst of flavors and textures in just one bite.`,
    ingredients: ["Semolina Puris", "Potato", "Chickpeas", "Spiced Water", "Tamarind Chutney"],
    veg: true,
    price: "$5.99",
    description: "Small crispy puris filled with a mixture of potatoes and chickpeas, served with tangy spiced water.",
    // Add any additional properties you'd like
  },
  {
    id: "10",
    name: `Rajma Chawal is a popular North Indian dish consisting of red kidney beans cooked in a thick gravy, served with steamed rice. The kidney beans are simmered with onions, tomatoes, and spices to create a flavorful and hearty dish that pairs perfectly with the fluffy rice.`,
    rating: 4.5,
    recipe: "https://www.example.com/rajma-chawal-recipe",
    ingredients: ["Kidney Beans", "Rice", "Onion", "Tomato", "Spices"],
    veg: true,
    price: "$9.99",
    description: "Red kidney beans cooked in a thick gravy, served with steamed rice.",
    // Add any additional properties you'd like
  },
  {
    id: "11",
    name: "Gulab Jamun",
    rating: 4.8,
    recipe: `To make Gulab Jamun, prepare a dough by combining milk powder, all-purpose flour, and a pinch of baking soda. Shape the dough into small balls and deep fry until golden brown. Then, soak the fried balls in a sugar syrup infused with cardamom and saffron. Serve the soft and sweet Gulab Jamun warm or chilled `,
    ingredients: ["Milk Powder", "All-Purpose Flour", "Sugar", "Cardamom", "Saffron"],
    veg: true,
    price: "$6.99",
    description: "Soft and sweet deep-fried dumplings soaked in sugar syrup.",
    // Add any additional properties you'd like
  },


  // Add more food items following the same pattern
];

export default data;
