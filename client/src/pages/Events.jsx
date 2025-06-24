import Footer from "../components/Footer";

const events = [
  {
    id: 1,
    title: "Meat Raffle",
    date: "Every Saturday",
    time: "7:00 PM",
    image: "/images/jazz-night.jpg",
    description:
      "Join us every Saturday for our famous Meat Raffle! Buy tickets for a chance to win a variety of meats, from steaks to sausages.",
  },
  // {
  //   id: 2,
  //   title: "Trivia Tuesday",
  //   date: "June 25, 2025",
  //   time: "8:00 PM",
  //   image: "/images/trivia-night.jpg",
  //   description:
  //     "Bring your friends and test your knowledge for prizes and fun. Teams up to 6 people.",
  // },
  // {
  //   id: 3,
  //   title: "Family Brunch",
  //   date: "June 30, 2025",
  //   time: "10:00 AM - 2:00 PM",
  //   image: "/images/brunch.jpg",
  //   description:
  //     "A special brunch menu for the whole family. Kids eat free with every adult meal.",
  // },
];

const Events = () => (
  <div
    className="events-page"
    style={{
      maxWidth: 900,
      margin: "2rem auto",
      padding: "1rem",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      Upcoming Events
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {events.map((event) => (
        <div
          key={event.id}
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1rem",
          }}
        >
          <img
            src={event.image}
            alt={event.title}
            style={{
              width: 160,
              height: 120,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <div>
            <h2 style={{ margin: 0 }}>{event.title}</h2>
            <p
              style={{
                margin: "0.25rem 0",
                color: "#555",
              }}
            >
              <strong>{event.date}</strong> &middot; {event.time}
            </p>
            <p style={{ margin: 0 }}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
<Footer /> 
  </div>
);

export default Events;