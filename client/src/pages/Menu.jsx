

const menu = {
  appetizers: [
    // { name: "Mozzarella Sticks", description: "Crispy and cheesy.", price: "$7" },
  ],
  entrees: [
    // { name: "Classic Burger", description: "Served with fries.", price: "$12" },
  ],
  drinks: [
    // { name: "Craft Beer", description: "Local selection.", price: "$5" },
  ],
  desserts: [
    // { name: "Chocolate Cake", description: "Rich and moist.", price: "$6" },
  ]
};

const Menu = () => (
  <div className="menu-page" style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
    <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Menu</h1>
    <section>
      <h2>Appetizers</h2>
      <ul>
        {menu.appetizers.length === 0 ? (
          <li style={{ color: "#888" }}>Add appetizers here...</li>
        ) : (
          menu.appetizers.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section>
      <h2>Entrees</h2>
      <ul>
        {menu.entrees.length === 0 ? (
          <li style={{ color: "#888" }}>Add entrees here...</li>
        ) : (
          menu.entrees.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section>
      <h2>Drinks</h2>
      <ul>
        {menu.drinks.length === 0 ? (
          <li style={{ color: "#888" }}>Add drinks here...</li>
        ) : (
          menu.drinks.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
    <section>
      <h2>Desserts</h2>
      <ul>
        {menu.desserts.length === 0 ? (
          <li style={{ color: "#888" }}>Add desserts here...</li>
        ) : (
          menu.desserts.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} <span style={{ float: "right" }}>{item.price}</span>
            </li>
          ))
        )}
      </ul>
    </section>
  </div>
);

export default Menu;