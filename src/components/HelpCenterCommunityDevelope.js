import styled from "styled-components";
import Depth7Frame from "./Depth7Frame";

const PowerfulFeaturesTo = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -1.19px;
  line-height: 2.81rem;
  font-weight: 900;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 1.69rem;
  }
`;
const Depth9Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const HeadtlerOffersA = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.5rem;
`;
const Depth9Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Depth8Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 4.5rem;
  font-size: var(--font-size-base);
`;
const Depth7Frame = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
`;
const Depth6Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  flex-shrink: 0;
`;
const Depth6Frame1 = styled.div`
  width: 58rem;
  height: 18.94rem;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  font-size: var(--font-size-base);
`;
const HelpCenterCommunityDevelopeRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-base) var(--padding-82xl);
  box-sizing: border-box;
  gap: var(--gap-21xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
  @media screen and (max-width: 750px) {
    gap: var(--gap-21xl);
    padding-bottom: var(--padding-47xl);
    box-sizing: border-box;
  }
`;

const HelpCenterCommunityDevelope = () => {
  return (
    <HelpCenterCommunityDevelopeRoot>
      <Depth6Frame>
        <Depth7Frame>
          <Depth9Frame>
            <Depth9Frame>
              <PowerfulFeaturesTo>
                Powerful features to help you grow
              </PowerfulFeaturesTo>
            </Depth9Frame>
          </Depth9Frame>
          <Depth8Frame>
            <Depth9Frame1>
              <HeadtlerOffersA>
                Headtler offers a comprehensive suite of tools to help you
                manage your business more efficiently. Whether you're a small
                business owner or a seasoned entrepreneur, our software is
                designed to be flexible, intuitive, and scalable.
              </HeadtlerOffersA>
            </Depth9Frame1>
          </Depth8Frame>
        </Depth7Frame>
      </Depth6Frame>
      <Depth6Frame1>
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
      </Depth6Frame1>
    </HelpCenterCommunityDevelopeRoot>
  );
};

export default HelpCenterCommunityDevelope;
