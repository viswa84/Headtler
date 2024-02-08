import { Button } from "@mui/material";
import "./Depth4Frame.css";

const Depth4Frame = () => {
  return (
    <div className="depth-4-frame-02">
      <div className="depth-5-frame-05">
        <img
          className="depth-6-frame-010"
          loading="eager"
          alt=""
          src="/depth-6-frame-0@2x.png"
        />
        <div className="depth-6-frame-2">
          <div className="depth-7-frame-06">
            <div className="depth-8-frame-06">
              <div className="depth-9-frame-0">
                <div className="depth-10-frame-0">
                  <h1 className="run-your-business">
                    Run your business, not just your books
                  </h1>
                </div>
              </div>
              <div className="depth-9-frame-1">
                <div className="depth-10-frame-01">
                  <div className="headtler-is-a">
                    Headtler is a new kind of ERP that helps you manage your
                    accounting, inventory, payroll, and more. All in one place,
                    and all for one price.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="depth-7-frame-13">
            <Button
              className="depth-8-frame-07"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fafafa",
                fontSize: "16",
                background: "#617afa",
                borderRadius: "12px",
                "&:hover": { background: "#617afa" },
                width: 174.1,
              }}
            >
              Try 1 Month Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
