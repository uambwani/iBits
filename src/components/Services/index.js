import React from "react";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/41.png";
import Icon3 from "../../images/29.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Minting Perks</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Future Bits</ServicesH2>
          <ServicesP>
            Owning an iBit will give you priority access to subsequent mints.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Deflationary</ServicesH2>
          <ServicesP>
            Royalties from secondary sales will be used to buy Bits back and
            burn them.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>NFT Governance</ServicesH2>
          <ServicesP>
            Owning an iBit gives you the ability to guide the future of the
            community.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
