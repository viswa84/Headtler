import "./Depth7Frame.css";

const Depth7Frame = ({
  depth9Frame0,
  accessFromAnyDevice,
  useHeadtlerOnYourLaptopTa,
}) => {
  return (
    <div className="depth-7-frame-011">
      <div className="depth-8-frame-012">
        <img
          className="depth-9-frame-03"
          loading="eager"
          alt=""
          src={depth9Frame0}
        />
      </div>
      <div className="depth-8-frame-11">
        <div className="depth-9-frame-04">
          <div className="access-from-any">{accessFromAnyDevice}</div>
        </div>
        <div className="depth-9-frame-11">
          <div className="use-headtler-on">{useHeadtlerOnYourLaptopTa}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth7Frame;
