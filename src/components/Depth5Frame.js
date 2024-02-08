import { useMemo } from "react";
import "./Depth5Frame.css";

const Depth5Frame = ({
  vector0,
  trackInventory,
  easilyTrackYourStockLevel,
  propAlignSelf,
  propLeft,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const depth5Frame1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const depth8Frame0Style = useMemo(() => {
    return {
      left: propLeft,
      height: propHeight,
    };
  }, [propLeft, propHeight]);

  const depth6Frame1Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const depth7Frame0Style = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className="depth-5-frame-12" style={depth5Frame1Style}>
      <div className="depth-6-frame-011">
        <div className="depth-7-frame-07">
          <img className="vector-01" loading="eager" alt="" src={vector0} />
          <div className="depth-8-frame-08" style={depth8Frame0Style} />
        </div>
      </div>
      <div className="depth-6-frame-12" style={depth6Frame1Style}>
        <div className="depth-7-frame-08" style={depth7Frame0Style}>
          <div className="depth-8-frame-09">
            <b className="track-inventory">{trackInventory}</b>
          </div>
        </div>
        <div className="depth-7-frame-14">
          <div className="depth-8-frame-010">
            <div className="easily-track-your">{easilyTrackYourStockLevel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
