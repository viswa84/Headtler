import { Button } from "@mui/material";
import styled from "styled-components";

const ReadyToGive = styled.h1`
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
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const SignUpToday = styled.div`
  width: 28.63rem;
  position: relative;
  line-height: 1.5rem;
  display: inline-block;
  max-width: 100%;
`;
const Depth8Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 3rem;
  max-width: 100%;
  font-size: var(--font-size-base);
`;
const Depth7Frame = styled.div`
  width: 32.81rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const Depth6Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Depth7Frame1 = styled(Button)`
  width: 10.88rem;
  flex: 1;
`;
const Depth6Frame1 = styled.div`
  align-self: stretch;
  height: 3.06rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
`;
const Depth5Frame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-61xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
  }
`;
const Depth4Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const AccountantBusinessPartnerFrRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-20xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const AccountantBusinessPartnerFr = () => {
  return (
    <AccountantBusinessPartnerFrRoot>
      <Depth4Frame>
        <Depth5Frame>
          <Depth6Frame>
            <Depth7Frame>
              <Depth9Frame>
                <Depth9Frame>
                  <ReadyToGive>Ready to give Headtler a try?</ReadyToGive>
                </Depth9Frame>
              </Depth9Frame>
              <Depth8Frame>
                <Depth9Frame>
                  <SignUpToday>
                    Sign up today and get your first month on us. No credit card
                    required.
                  </SignUpToday>
                </Depth9Frame>
              </Depth8Frame>
            </Depth7Frame>
          </Depth6Frame>
          <Depth6Frame1>
            <Depth7Frame1
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
            </Depth7Frame1>
          </Depth6Frame1>
        </Depth5Frame>
      </Depth4Frame>
    </AccountantBusinessPartnerFrRoot>
  );
};

export default AccountantBusinessPartnerFr;
