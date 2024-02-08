import styled from "styled-components";

const Depth9Frame = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Depth8Frame = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AccessFromAny = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.5rem;
  font-weight: 500;
`;
const Depth9Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const UseHeadtlerOn = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.31rem;
`;
const Depth9Frame2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray);
`;
const Depth8Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-xs);
`;
const Depth7FrameRoot = styled.div`
  align-self: stretch;
  width: 18.83rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const Depth7Frame = ({
  depth9Frame0,
  accessFromAnyDevice,
  useHeadtlerOnYourLaptopTa,
}) => {
  return (
    <Depth7FrameRoot>
      <Depth8Frame>
        <Depth9Frame loading="eager" alt="" src={depth9Frame0} />
      </Depth8Frame>
      <Depth8Frame1>
        <Depth9Frame1>
          <AccessFromAny>{accessFromAnyDevice}</AccessFromAny>
        </Depth9Frame1>
        <Depth9Frame2>
          <UseHeadtlerOn>{useHeadtlerOnYourLaptopTa}</UseHeadtlerOn>
        </Depth9Frame2>
      </Depth8Frame1>
    </Depth7FrameRoot>
  );
};

export default Depth7Frame;
