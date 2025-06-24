// import React from "react";

import Footer from "../components/Footer";

// const menu = {
  
//   appetizers: [
//     { name: "", description: "", price: ""},
//     { name: "Bone-In Wings", description: "Deep Fried or Grilled. Choice of mild, buffalo, extra hot, suicide, honey garlic, sweet chili, cajun, siracha, garlic parmesean, teriyaki, sweet BBQ, or Kansas City BBQ.", price: "8 for $9.25 OR 12 for $12.25" },
//     { name: "Potato Skins", description: "6 halves filled with cheddar cheese and bacon with side of sour cream.", price: "$8.75"},
//     { name: "Italian Beef Egg Rolls", description:"6 halves served with horseradish sauce or Au-Jus.", price:"$8.75"},
//     { name: "Pot Stickers", description: "Pork filled served with dipping sauce.", price: "$8.25"},
//     { name: "Ultimate Nachos", description: "Homemade chips topped with nacho cheese, shredded monterey jack, lettuce, and tomato. (Jalepenos optional) ADD BEEF - $3.00 ADD CHICKEN - $3.00 ADD STEAK - $11.75", price: "$7.75"},
//     { name: "Fried Shrimp", description: "Jumbo hand breaded, battered deep fried shrimp with homemade cocktail sauce and garlic bread.", price: "$11.75"},
//     { name: "Garlic Shrimp", description: "Sauteed in garlic butter and served with garlic bread.", price: "$11.75"},
//     { name: "Buffalo Fried Shrimp", description: "Our fried shrimp in buffalo and served with garlic bread", price: "$11.75"},
//     { name: "Cheese Quesadillas", description: "12 inch flour tortilla filled with monterey jack or mozzzrella and served with sour cream. ADD CHICKEN - $3.00 ADD STEAK - $7.25", price: "$6.75"},
//     { name: "Onion Rings", description: "Battered thick cut onion rings served with ranch", price: "$7.25"},
//     { name: "Fried Mushroooms", description: "Battered and deep fried served with ranch", price: "$7.25"},
//     { name: "Mozzarella Sticks", description: "Breaded and served with marinara", price: "$6.75"},
//     { name: "Cheese Curds", description: "With choice of sauce", price: "$7.25"},
//     { name: "Chicken Tenders", description: "With choice of sauce (add small fried for $1.75).", price: "7.25"},
//     { name: "Pizza Puff", description: "Golden brown and crispy", price: "3.75"},
//     { name: "Combo Platter", description: "Chicken strips, onion rings, mushrooms, and mozzarella sticks, served with ranch and marinara.", price: "$11.25"},
//     { name: "Basket of Fried or Tots", description: "Add cup of cheese $1.25", price: "$3.00"},
//     { name: "Loaded Fries or Tots", description: "Fries or Tots smothered in Monterey Jack, nacho cheese, and bacon, served with sour cream.", price: "$7.75"},
//     { name: "Chili Cheese Fries or Tots", description: "Fries or Tots smothered with nacho cheese, shredded monterey jack, chili, onion and served with sour cream.", price: "$7.75"},
//   ],
//   entrees: [
//     // { name: "Classic Burger", description: "Served with fries.", price: "$12" },
//   ],
//   drinks: [
//     // { name: "Craft Beer", description: "Local selection.", price: "$5" },
//   ],
//   desserts: [
//     // { name: "Chocolate Cake", description: "Rich and moist.", price: "$6" },
//   ]
// };

// const Menu = () => (
//   <div className="menu-page" style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
//     {/* Navigation Section */}
//     <nav style={{ position: "sticky", top: 0, background: "#fff", zIndex: 100, padding: "1rem 0" }}>
//       <a href="#appetizers" style={{ marginRight: "1rem" }}>Appetizers</a>
//       <a href="#entrees" style={{ marginRight: "1rem" }}>Entrees</a>
//       <a href="#drinks" style={{ marginRight: "1rem" }}>Drinks</a>
//       <a href="#desserts">Desserts</a>
//     </nav>

//     {/* Menu Sections */}
//     <section id="appetizers">
//       <h2>Appetizers</h2>
//       <ul>
//         {menu.appetizers.length === 0 ? (
//           <li style={{ color: "#888" }}>Add appetizers here...</li>
//         ) : (
//           menu.appetizers.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
//             </li>
//           ))
//         )}
//       </ul>
//     </section>
//     <section id="entrees">
//       <h2>Entrees</h2>
//       <ul>
//         {menu.entrees.length === 0 ? (
//           <li style={{ color: "#888" }}>Add entrees here...</li>
//         ) : (
//           menu.entrees.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
//             </li>
//           ))
//         )}
//       </ul>
//     </section>
//     <section id="drinks">
//       <h2>Drinks</h2>
//       <ul>
//         {menu.drinks.length === 0 ? (
//           <li style={{ color: "#888" }}>Add drinks here...</li>
//         ) : (
//           menu.drinks.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
//             </li>
//           ))
//         )}
//       </ul>
//     </section>
//     <section id="desserts">
//       <h2>Desserts</h2>
//       <ul>
//         {menu.desserts.length === 0 ? (
//           <li style={{ color: "#888" }}>Add desserts here...</li>
//         ) : (
//           menu.desserts.map((item, idx) => (
//             <li key={idx}>
//               <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
//             </li>
//           ))
//         )}
//       </ul>
//     </section>
//   </div>
// );

// export default Menu;


// Example hardcoded menu data
const defaultMenu = {
  appetizers: [
    { name: "Bone-In Wings", description: "Deep Fried or Grilled. Choice of mild, buffalo, extra hot, suicide, honey garlic, sweet chili, cajun, siracha, garlic parmesean, teriyaki, sweet BBQ, or Kansas City BBQ.", price: "8 for $9.25 OR 12 for $12.25" },
    { name: "Potato Skins", description: "6 halves filled with cheddar cheese and bacon with side of sour cream.", price: "$8.75"},
    { name: "Italian Beef Egg Rolls", description:"6 halves served with horseradish sauce or Au-Jus.", price:"$8.75"},
    { name: "Pot Stickers", description: "Pork filled served with dipping sauce.", price: "$8.25"},
    { name: "Ultimate Nachos", description: "Homemade chips topped with nacho cheese, shredded monterey jack, lettuce, and tomato. (Jalepenos optional) ADD BEEF - $3.00 ADD CHICKEN - $3.00 ADD STEAK - $11.75", price: "$7.75"},
    { name: "Fried Shrimp", description: "Jumbo hand breaded, battered deep fried shrimp with homemade cocktail sauce and garlic bread.", price: "$11.75"},
    { name: "Garlic Shrimp", description: "Sauteed in garlic butter and served with garlic bread.", price: "$11.75"},
    { name: "Buffalo Fried Shrimp", description: "Our fried shrimp in buffalo and served with garlic bread", price: "$11.75"},
    { name: "Cheese Quesadillas", description: "12 inch flour tortilla filled with monterey jack or mozzzrella and served with sour cream. ADD CHICKEN - $3.00 ADD STEAK - $7.25", price: "$6.75"},
    { name: "Onion Rings", description: "Battered thick cut onion rings served with ranch", price: "$7.25"},
    { name: "Fried Mushroooms", description: "Battered and deep fried served with ranch", price: "$7.25"},
    { name: "Mozzarella Sticks", description: "Breaded and served with marinara", price: "$6.75"},
    { name: "Cheese Curds", description: "With choice of sauce", price: "$7.25"},
    { name: "Chicken Tenders", description: "With choice of sauce (add small fried for $1.75).", price: "7.25"},
    { name: "Pizza Puff", description: "Golden brown and crispy", price: "3.75"},
    { name: "Combo Platter", description: "Chicken strips, onion rings, mushrooms, and mozzarella sticks, served with ranch and marinara.", price: "$11.25"},
    { name: "Basket of Fries or Tots", description: "Add cup of cheese $1.25", price: "$3.00"},
    { name: "Loaded Fries or Tots", description: "Fries or Tots smothered in Monterey Jack, nacho cheese, and bacon, served with sour cream.", price: "$7.75"},
    { name: "Chili Cheese Fries or Tots", description: "Fries or Tots smothered with nacho cheese, shredded monterey jack, chili, onion and served with sour cream.", price: "$7.75"},
  ],
  entrees: [
    { name: "Grilled Salmon", description: "With lemon butter", price: "$15.99" },
    { name: "Ribeye Steak", description: "8oz slow cooked marinated ribeye cooked over open flame.", price: "$14.75" },
    { name: "Deep Fried Shrimp", description: "Jumbo hand breaded, battered deep fried shrimp with cocktail sauce.", price: "$13.75" },
    { name: "Sizzled Shrimp", description: "Sauteed in garlic butter and served with butter.", price: "$13.75" },
    { name: "Smoke House Chicken", description: "7oz chicken breast smothered in BBQ, Bacon, Mozzarella, and Monterey Jack cheese.", price: "$10.75"},
    {name: "Smothered Grilled Chicken", description: "7oz grilled chicken breast tipped with onions, red and green peppers, and mozzarela cheese.", price: "$10.75" },
  ],
  drinks: [
    { name: "Iced Tea", description: "Freshly brewed", price: "$2.99" },
    // ...other drinks
  ],
  desserts: [
    { name: "Cheesecake", description: "Classic NY style", price: "$6.99" },
    // ...other desserts
  ],
};

const Menu = ({ menu = { appetizers: [], entrees: [], drinks: [], desserts: [] } }) => (
  <div className="menu-page" style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
    {/* Navigation Section */}
    <nav style={{ position: "sticky", top: 0, background: "#fff", zIndex: 100, padding: "1rem 0" }}>
      <a href="#appetizers" style={{ marginRight: "1rem" }}>Appetizers</a>
      <a href="#entrees" style={{ marginRight: "1rem" }}>Entrees</a>
      <a href="#drinks" style={{ marginRight: "1rem" }}>Drinks</a>
      <a href="#desserts">Desserts</a>
    </nav>

    {/* Menu Sections */}
    <section id="appetizers">
      <h2>Appetizers</h2>
      <ul>
        {[...defaultMenu.appetizers, ...menu.appetizers].length === 0 ? (
          <li style={{ color: "#888" }}>Add appetizers here...</li>
        ) : (
          [...defaultMenu.appetizers, ...menu.appetizers].map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section id="entrees">
      <h2>Entrees</h2>
      <ul>
        {[...defaultMenu.entrees, ...menu.entrees].length === 0 ? (
          <li style={{ color: "#888" }}>Add entrees here...</li>
        ) : (
          [...defaultMenu.entrees, ...menu.entrees].map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section id="drinks">
      <h2>Drinks</h2>
      <ul>
        {[...defaultMenu.drinks, ...menu.drinks].length === 0 ? (
          <li style={{ color: "#888" }}>Add drinks here...</li>
        ) : (
          [...defaultMenu.drinks, ...menu.drinks].map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section id="desserts">
      <h2>Desserts</h2>
      <ul>
        {[...defaultMenu.desserts, ...menu.desserts].length === 0 ? (
          <li style={{ color: "#888" }}>Add desserts here...</li>
        ) : (
          [...defaultMenu.desserts, ...menu.desserts].map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <Footer />
  </div>
);

export default Menu;