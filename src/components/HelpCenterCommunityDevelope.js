import Depth7Frame from "./Depth7Frame";
import "./HelpCenterCommunityDevelope.css";

const HelpCenterCommunityDevelope = () => {
  return (
    <div className="help-center-community-develope">
      <div className="depth-6-frame-013">
        <div className="depth-7-frame-012">
          <div className="depth-8-frame-013">
            <div className="depth-9-frame-05">
              <h1 className="powerful-features-to">
                Powerful features to help you grow
              </h1>
            </div>
          </div>
          <div className="depth-8-frame-12">
            <div className="depth-9-frame-06">
              <div className="headtler-offers-a">
                Headtler offers a comprehensive suite of tools to help you
                manage your business more efficiently. Whether you're a small
                business owner or a seasoned entrepreneur, our software is
                designed to be flexible, intuitive, and scalable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="depth-6-frame-14">
        <Depth7Frame
          depth9Frame0="/depth-9-frame-0@2x.png"
          accessFromAnyDevice="Access from any device"
          useHeadtlerOnYourLaptopTa="Use Headtler on your laptop, tablet, or smartphone. Our cloud-based software lets you work from anywhere."
        />
        <Depth7Frame
          depth9Frame0="/depth-9-frame-0-1@2x.png"
          accessFromAnyDevice="Collaborate with your team"
          useHeadtlerOnYourLaptopTa="Invite your accountant, business partner, or other team members to collaborate in Headtler. You can set permissions to control who can view or edit your data."
        />
        <Depth7Frame
          depth9Frame0="/depth-9-frame-0-2@2x.png"
          accessFromAnyDevice="Integrate with your favorite tools"
          useHeadtlerOnYourLaptopTa="Connect Headtler to your bank, e-commerce platform, point-of-sale system, and more. Our integrations help you streamline your workflows and automate data entry."
        />
      </div>
    </div>
  );
};

export default HelpCenterCommunityDevelope;
