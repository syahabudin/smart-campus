import "./feathure.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { KeyboardArrowUp } from "@mui/icons-material";

const Feathure = () => {
  return (
    <div className="feathured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="feathureChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total students made year</p>
        <p className="amount">1.100</p>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat eius sint ex saepe aspernatur id voluptates qui alias laborum nulla nisi inventore nesciunt velit, atque quisquam voluptas, libero autem.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">1.500k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Year</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">1.500k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Next Year</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">1.500k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feathure;
