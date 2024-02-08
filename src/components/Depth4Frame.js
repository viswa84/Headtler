import { Button } from "@mui/material";
import styled from "styled-components";

const Depth6Frame = styled.img`
  width: 26.54rem;
  position: relative;
  border-radius: var(--br-xs);
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 17.5rem;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
`;
const RunYourBusiness = styled.h1`
  margin: 0;
  width: 27.44rem;
  position: relative;
  font-size: inherit;
  letter-spacing: -1.58px;
  line-height: 3.75rem;
  font-weight: 900;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-19xl);
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
    line-height: 2.25rem;
  }
`;
const Depth10Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Depth9Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 7.5rem;
  max-width: 100%;
`;
const HeadtlerIsA = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.5rem;
`;
const Depth10Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Depth9Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 4.5rem;
  font-size: var(--font-size-base);
`;
const Depth8Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    align-self: stretch;
    width: auto;
  }
`;
const Depth8Frame1 = styled(Button)`
  align-self: stretch;
  width: 10.88rem;
`;
const Depth7Frame = styled.div`
  align-self: stretch;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Depth6Frame1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-13xl);
  min-width: 19.13rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
  }
`;
const Depth5Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
`;
const Depth4FrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const Depth4Frame = () => {
  return (
    <Depth4FrameRoot>
      <Depth5Frame>
        <Depth6Frame loading="eager" alt="" src="/depth-6-frame-0@2x.png" />
        <Depth6Frame1>
          <Depth10Frame>
            <Depth8Frame>
              <Depth9Frame>
                <Depth10Frame>
                  <RunYourBusiness>
                    Run your business, not just your books
                  </RunYourBusiness>
                </Depth10Frame>
              </Depth9Frame>
              <Depth9Frame1>
                <Depth10Frame1>
                  <HeadtlerIsA>
                    Headtler is a new kind of ERP that helps you manage your
                    accounting, inventory, payroll, and more. All in one place,
                    and all for one price.
                  </HeadtlerIsA>
                </Depth10Frame1>
              </Depth9Frame1>
            </Depth8Frame>
          </Depth10Frame>
          <Depth7Frame>
            <Depth8Frame1
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
            </Depth8Frame1>
          </Depth7Frame>
        </Depth6Frame1>
      </Depth5Frame>
    </Depth4FrameRoot>
  );
};

export default Depth4Frame;
