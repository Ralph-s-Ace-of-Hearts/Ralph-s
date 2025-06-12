import { useGlobalContext } from "../utils/GlobalState";
import { QUERY_USERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { SET_USERS } from "../utils/actions";

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
        <h3 style={{ color: "var(--primary-red)" }}>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="main-content">
        <h1
          style={{
            color: "var(--primary-red)",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "24px",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          Welcome to Ralph's Restaurant
        </h1>
      </div>
    </div>
  );
};

export default Home;
