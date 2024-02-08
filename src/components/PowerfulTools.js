import styled from "styled-components";

const HelpCenter = styled.div`
  position: relative;
  line-height: 1.5rem;
`;
const CommunityDevelopers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs) 0rem 0rem;
`;
const CommunityDevelopers1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xs) 0rem 0rem;
`;
const HelpCenterFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem var(--padding-9xs) 0rem 0rem;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const HeadtlerFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-5xs) 0rem 0rem;
`;
const VectorVectorFrames = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
`;
const Depth8Frame = styled.div`
  position: absolute;
  top: -48.75rem;
  left: -34.25rem;
  width: 1.19rem;
  height: 1.25rem;
  display: none;
`;
const Depth7Frame = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Depth8Frame1 = styled.div`
  position: absolute;
  top: -48.75rem;
  left: -36.75rem;
  width: 1.25rem;
  height: 1.13rem;
  display: none;
`;
const Depth8Frame2 = styled.div`
  position: absolute;
  top: -48.75rem;
  left: -39.25rem;
  width: 1.19rem;
  height: 1.25rem;
  display: none;
`;
const Depth8Frame3 = styled.div`
  position: absolute;
  top: -48.75rem;
  left: -41.75rem;
  width: 1.31rem;
  height: 1.06rem;
  display: none;
`;
const DepthFrameVector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const VectorFrames = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-6xs) 0rem 0rem;
`;
const TermsOfService = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const PowerfulToolsRoot = styled.footer`
  width: 53.88rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem var(--padding-6xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-inter);
`;

const PowerfulTools = () => {
  return (
    <PowerfulToolsRoot>
      <TermsOfService>
        <HelpCenterFrame>
          <HelpCenter>Help Center</HelpCenter>
          <CommunityDevelopers>
            <HelpCenter>Community</HelpCenter>
          </CommunityDevelopers>
          <CommunityDevelopers1>
            <HelpCenter>Developers</HelpCenter>
          </CommunityDevelopers1>
          <HelpCenter>Company</HelpCenter>
          <HelpCenter>Privacy Policy</HelpCenter>
        </HelpCenterFrame>
        <HeadtlerFrame>
          <HelpCenter>Terms of Service</HelpCenter>
        </HeadtlerFrame>
        <VectorFrames>
          <DepthFrameVector>
            <Depth7Frame>
              <VectorVectorFrames
                loading="eager"
                alt=""
                src="/vector--0-5.svg"
              />
              <Depth8Frame />
            </Depth7Frame>
            <Depth7Frame>
              <VectorVectorFrames
                loading="eager"
                alt=""
                src="/vector--0-6.svg"
              />
              <Depth8Frame1 />
            </Depth7Frame>
            <Depth7Frame>
              <VectorVectorFrames
                loading="eager"
                alt=""
                src="/vector--0-7.svg"
              />
              <Depth8Frame2 />
            </Depth7Frame>
            <Depth7Frame>
              <VectorVectorFrames
                loading="eager"
                alt=""
                src="/vector--0-8.svg"
              />
              <Depth8Frame3 />
            </Depth7Frame>
          </DepthFrameVector>
        </VectorFrames>
        <HeadtlerFrame>
          <HelpCenter>@2022 Headtler</HelpCenter>
        </HeadtlerFrame>
      </TermsOfService>
    </PowerfulToolsRoot>
  );
};

export default PowerfulTools;
