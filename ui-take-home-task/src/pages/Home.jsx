import Graph from "../components/Graph";
import "../styles/Home.css"; // Add some global styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Graph Visualization</h1>
      <p className="home-subtitle">Explore function call dependencies dynamically</p>
      <div className="graph-wrapper">
        <Graph />
      </div>
    </div>
  );
};

export default Home;
