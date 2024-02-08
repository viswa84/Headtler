import Depth2Frame from "../components/Depth2Frame";
import Depth4Frame from "../components/Depth4Frame";
import styled from "styled-components";
import Depth5Frame from "../components/Depth5Frame";
import AccountantBusinessPartnerFr from "../components/AccountantBusinessPartnerFr";
import HelpCenterCommunityDevelope from "../components/HelpCenterCommunityDevelope";
import PowerfulTools from "../components/PowerfulTools";

const WhyHeadtler = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.33px;
  line-height: 1.72rem;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 1.38rem;
  }
`;
const Depth6Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Depth5Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
`;
const Depth4Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-xs);
`;
const FrameMarketingIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
`;
const Depth8Frame = styled.div`
  position: absolute;
  top: 34.59rem;
  left: -10.75rem;
  width: 0.94rem;
  height: 1.13rem;
`;
const Depth7Frame = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Depth6Frame1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ManageYourBooks = styled.b`
  position: relative;
  line-height: 1.25rem;
`;
const GetRealTimeReports = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.31rem;
`;
const Depth7Frame1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray);
`;
const Depth6Frame2 = styled.div`
  align-self: stretch;
  height: 9.38rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Depth5Frame1 = styled.div`
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
`;
const Depth8Frame1 = styled.div`
  position: absolute;
  top: 34.59rem;
  left: -40.12rem;
  width: 0.81rem;
  height: 1.31rem;
`;
const Depth4Frame2 = styled.div`
  width: 60rem;
  height: 19.69rem;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-xs);
  max-width: 100%;
  font-size: var(--font-size-base);
`;
const PowerfulFeatures = styled.section`
  width: 62.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;
const Depth0Frame = styled.main`
  flex: 1;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const GalileoDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
`;

const GalileoDesign = () => {
  return (
    <GalileoDesignRoot>
      <Depth0Frame>
        <Depth2Frame />
        <PowerfulFeatures>
          <Depth4Frame />
          <Depth4Frame1>
            <Depth5Frame>
              <Depth6Frame>
                <WhyHeadtler>Why Headtler</WhyHeadtler>
              </Depth6Frame>
            </Depth5Frame>
          </Depth4Frame1>
          <Depth4Frame2>
            <Depth5Frame1>
              <Depth6Frame1>
                <Depth7Frame>
                  <FrameMarketingIcon
                    loading="eager"
                    alt=""
                    src="/vector--0-1.svg"
                  />
                  <Depth8Frame />
                </Depth7Frame>
              </Depth6Frame1>
              <Depth6Frame2>
                <Depth6Frame1>
                  <Depth6Frame1>
                    <ManageYourBooks>Manage your books</ManageYourBooks>
                  </Depth6Frame1>
                </Depth6Frame1>
                <Depth7Frame1>
                  <Depth6Frame1>
                    <GetRealTimeReports>
                      Get real-time reports on your income, expenses, and
                      profit. Plus, you can automate your bookkeeping by
                      connecting your bank and credit card accounts.
                    </GetRealTimeReports>
                  </Depth6Frame1>
                </Depth7Frame1>
              </Depth6Frame2>
            </Depth5Frame1>
            <Depth5Frame
              vector0="/vector--0-2.svg"
              trackInventory="Track inventory"
              easilyTrackYourStockLevel="Easily track your stock levels, set reorder points, and manage your suppliers. You can also use barcode scanning to speed up your inventory management."
            />
            <Depth5Frame1>
              <Depth6Frame1>
                <Depth7Frame>
                  <FrameMarketingIcon
                    loading="eager"
                    alt=""
                    src="/vector--0-3.svg"
                  />
                  <Depth8Frame1 />
                </Depth7Frame>
              </Depth6Frame1>
              <Depth6Frame2>
                <Depth6Frame1>
                  <Depth6Frame1>
                    <ManageYourBooks>Pay your team</ManageYourBooks>
                  </Depth6Frame1>
                </Depth6Frame1>
                <Depth7Frame1>
                  <Depth6Frame1>
                    <GetRealTimeReports>
                      Run payroll in minutes with our built-in system. We'll
                      calculate your employee's paychecks, file your payroll
                      taxes, and provide W-2s at the end of the year.
                    </GetRealTimeReports>
                  </Depth6Frame1>
                </Depth7Frame1>
              </Depth6Frame2>
            </Depth5Frame1>
            <Depth5Frame
              vector0="/vector--0-4.svg"
              trackInventory="Understand your business"
              easilyTrackYourStockLevel="Get detailed insights into your business performance, so you can make more informed decisions. Plus, you can create custom dashboards and add integrations to extend Headtler's capabilities."
              propAlignSelf="unset"
              propLeft="-54.81rem"
              propHeight="1.06rem"
              propHeight1="13.25rem"
              propHeight2="2.5rem"
            />
          </Depth4Frame2>
          <AccountantBusinessPartnerFr />
          <HelpCenterCommunityDevelope />
          <PowerfulTools />
        </PowerfulFeatures>
      </Depth0Frame>
    </GalileoDesignRoot>
  );
};

export default GalileoDesign;
