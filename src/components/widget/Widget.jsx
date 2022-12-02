import "./widget.scss";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

const Widget = ({ type }) => {
  let data;

  //   temporary
  const st = 23;
  const ds = 50;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isSks: false,
        link: "See all user",
        icon: <Person2OutlinedIcon className="icon" style={{ color: "crimsom", backgroundColor: "rgba(255,0,0,0.2)" }} />,
      };
      break;

    case "sks":
      data = {
        title: "SKS",
        isSks: true,
        link: "See all details",
        icon: <FeaturedVideoOutlinedIcon className="icon" style={{ color: "brown", backgroundColor: "rgba(0,128,0,0.2)" }} />,
      };
      break;

    case "dosen":
      data = {
        title: "Dosen",
        isSks: true,
        link: "view all Dosen",
        icon: <PsychologyOutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0,123,0,0.2)" }} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.sks && "SKS"} {st}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <TrendingUpOutlinedIcon />+ {ds} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
