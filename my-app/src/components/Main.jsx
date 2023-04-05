import BasicCard from "./Javascript";
import Python from "./Python";
import NavBar from "./Navbar";
import LeftNav from "./LeftNav";

export const Main = () => {
  return (
    <main>
      <div className="nav-container">
        <LeftNav />
        <NavBar />
      </div>
      <section className="card-section">
        <jscard className="basic-card">
          <BasicCard />
        </jscard>
        <Python />
      </section>
    </main>
  );
};
