import styled from "styled-components";

const MonthFreeIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
`;
const MonthFreeIcon1 = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Depth7Frame = styled.div`
  position: absolute;
  top: 66.59rem;
  left: -1.25rem;
  width: 0.38rem;
  height: 0.63rem;
`;
const Depth7Frame1 = styled.div`
  position: absolute;
  top: 66.59rem;
  left: -1.25rem;
  width: 0.88rem;
  height: 0.88rem;
`;
const Depth6Frame = styled.div`
  width: 1rem;
  height: 1rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Depth5Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Headtler = styled.b`
  position: relative;
  letter-spacing: -0.27px;
  line-height: 1.41rem;
  white-space: nowrap;
`;
const Depth4Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Depth3Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Home = styled.div`
  position: relative;
  line-height: 1.31rem;
  font-weight: 500;
`;
const Depth4Frame1 = styled.div`
  align-self: stretch;
  width: 21.01rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const MonthFreeTrial = styled.b`
  position: relative;
  letter-spacing: 0.21px;
  line-height: 1.31rem;
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Depth6Frame1 = styled.div`
  background-color: var(--color-royalblue);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Depth5Frame1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-royalblue);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-base);
`;
const Depth4Frame2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-gray-100);
`;
const Depth4Frame3 = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  border-radius: var(--br-xl);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 2.5rem;
`;
const Depth3Frame1 = styled.div`
  height: 2.5rem;
  width: 68.36rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-13xl);
  max-width: 100%;
  font-size: var(--font-size-sm);
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
  }
`;
const Depth2FrameRoot = styled.header`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-21xl);
  gap: var(--gap-0);
  top: 0;
  row-gap: 20px;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const Depth2Frame = () => {
  return (
    <Depth2FrameRoot>
      <Depth3Frame>
        <Depth4Frame>
          <Depth5Frame>
            <Depth6Frame>
              <MonthFreeIcon alt="" src="/month-free.svg" />
              <MonthFreeIcon1 loading="eager" alt="" src="/vector--1.svg" />
              <Depth7Frame />
              <Depth7Frame1 />
            </Depth6Frame>
          </Depth5Frame>
          <Depth5Frame>
            <Depth5Frame>
              <Headtler>Headtler</Headtler>
            </Depth5Frame>
          </Depth5Frame>
        </Depth4Frame>
      </Depth3Frame>
      <Depth3Frame1>
        <Depth4Frame1>
          <Depth5Frame>
            <Depth5Frame>
              <Home>Home</Home>
            </Depth5Frame>
          </Depth5Frame>
          <Depth5Frame>
            <Depth5Frame>
              <Home>Pricing</Home>
            </Depth5Frame>
          </Depth5Frame>
          <Depth5Frame>
            <Depth5Frame>
              <Home>Testimonials</Home>
            </Depth5Frame>
          </Depth5Frame>
          <Depth5Frame>
            <Depth5Frame>
              <Home>Features</Home>
            </Depth5Frame>
          </Depth5Frame>
        </Depth4Frame1>
        <Depth4Frame2>
          <Depth5Frame1>
            <Depth6Frame1>
              <Depth5Frame>
                <MonthFreeTrial>1 Month Free Trial</MonthFreeTrial>
              </Depth5Frame>
            </Depth6Frame1>
          </Depth5Frame1>
        </Depth4Frame2>
        <Depth4Frame3 loading="eager" alt="" src="/depth-4-frame-2@2x.png" />
      </Depth3Frame1>
    </Depth2FrameRoot>
  );
};

export default Depth2Frame;
