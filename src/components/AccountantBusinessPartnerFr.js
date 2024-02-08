import { Button } from "@mui/material";
import "./AccountantBusinessPartnerFr.css";

const AccountantBusinessPartnerFr = () => {
  return (
    <div className="accountant-business-partner-fr">
      <div className="depth-4-frame-3">
        <div className="depth-5-frame-06">
          <div className="depth-6-frame-012">
            <div className="depth-7-frame-09">
              <div className="depth-8-frame-011">
                <div className="depth-9-frame-01">
                  <h1 className="ready-to-give">
                    Ready to give Headtler a try?
                  </h1>
                </div>
              </div>
              <div className="depth-8-frame-1">
                <div className="depth-9-frame-02">
                  <div className="sign-up-today">
                    Sign up today and get your first month on us. No credit card
                    required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="depth-6-frame-13">
            <Button
              className="depth-7-frame-010"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fafafa",
                fontSize: "16",
                background: "#617afa",
                borderRadius: "0px 0px 0px 0px",
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

export default AccountantBusinessPartnerFr;
