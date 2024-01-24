import "./Sidebar.scss";
import SidebarElement from "../SidebarElement/SidebarElement";

function Sidebar(props) {
  const { videos, selectVideo } = props;
  return (
    <section className="sidebar">
      <h3 className="sidebar__title">Next Videos</h3>
      {videos.map((video) => (
        <SidebarElement
          key={video.id}
          video={video}
          selectVideo={selectVideo}
        />
      ))}
    </section>
  );
}

export default Sidebar;
