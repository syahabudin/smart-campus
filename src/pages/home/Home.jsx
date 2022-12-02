import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Feathure from "../../components/feathured/Feathure";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="sks" />
          <Widget type="dosen" />
        </div>
        <div className="charts">
          <Feathure />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Data users</div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
