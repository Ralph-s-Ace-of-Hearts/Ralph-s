import { useGlobalContext } from "../utils/GlobalState";
import { QUERY_USERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { SET_USERS } from "../utils/actions";
import Weather from "../components/WeatherReccomendation";
import Facebook from "../components/Facebook";

const Home = () => {
  const [state, dispatch] = useGlobalContext();
  const { data, loading } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  useEffect(() => {
    dispatch({ type: SET_USERS, payload: users });
  }, [data]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--white)",
        }}
      >
        <h3 style={{ color: "var(--primary)" }}>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="home-container">
      <img data-aos="fade-up" src="/images/barPhoto.jpg" alt="Ralphs" className="headerImage" />
      <div className="main-content">
        <h1 data-aos="fade-down-right"
          style={{
            color: "var(--primary)",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "24px",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          Welcome to Ralph's Restaurant
        </h1>
        <h2 data-aos="fade-down-left">
          Ralph's is a family-owned restaurant that has been serving the community for over 20 years. We pride ourselves on our delicious food, friendly service, and welcoming atmosphere. Whether you're here for a quick lunch or a special dinner, we have something for everyone.
        </h2>
      </div>
        <div className="specialImages">
          <img src="images/tacoTuesday.jpg" alt="taco" />
          <img src="images/wingWednesday.jpg" alt="wing" />
        </div>
      <div className="weather-recommendation">
        <Weather />
      </div>
      <div>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>
          Follow us on Facebook for the latest updates!
        </h2>
        <Facebook />
      </div>
    </div>
  );
};

export default Home;
