import styled from "styled-components";

const Vector = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
`;
const Depth8Frame = styled.div`position: absolute;
  top: 34.59rem;
  left: -25.44rem;
  width: 1.38rem;
  height: 1rem;
  left: ${(p) => p.propLeft}
  height: ${(p) => p.propHeight}
`;
const Depth7Frame = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Depth6Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TrackInventory = styled.b`
  position: relative;
  line-height: 1.25rem;
`;
const Depth7Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: ${(p) => p.propHeight2};
`;
const EasilyTrackYour = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.31rem;
`;
const Depth7Frame2 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray);
`;
const Depth6Frame1 = styled.div`
  align-self: stretch;
  height: 9.38rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  height: ${(p) => p.propHeight1};
`;
const Depth5FrameRoot = styled.div`
  align-self: stretch;
  width: 13.94rem;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-lg) var(--padding-base)
    var(--padding-base);
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
  align-self: ${(p) => p.propAlignSelf};
`;

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
  return (
    <Depth5FrameRoot propAlignSelf={propAlignSelf}>
      <Depth6Frame>
        <Depth7Frame>
          <Vector loading="eager" alt="" src={vector0} />
          <Depth8Frame propLeft={propLeft} propHeight={propHeight} />
        </Depth7Frame>
      </Depth6Frame>
      <Depth6Frame1 propHeight1={propHeight1}>
        <Depth7Frame1 propHeight2={propHeight2}>
          <Depth6Frame>
            <TrackInventory>{trackInventory}</TrackInventory>
          </Depth6Frame>
        </Depth7Frame1>
        <Depth7Frame2>
          <Depth6Frame>
            <EasilyTrackYour>{easilyTrackYourStockLevel}</EasilyTrackYour>
          </Depth6Frame>
        </Depth7Frame2>
      </Depth6Frame1>
    </Depth5FrameRoot>
  );
};

export default Depth5Frame;
