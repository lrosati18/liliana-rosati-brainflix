import { Link } from "react-router-dom";

import "./Sidebar.scss";
import SidebarElement from "../SidebarElement/SidebarElement";

function Sidebar(props) {
  const { videos, selectVideo } = props;
  return (
    <section className="sidebar">
      <h3 className="sidebar__title">Next Videos</h3>
      {videos.map((video) => (
        <Link to={`/videos/${video.id}`} key={video.id}>
          <SidebarElement video={video} />
        </Link>
      ))}
    </section>
  );
}

export default Sidebar;
