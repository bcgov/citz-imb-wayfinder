import { ContentContainer, ViewContainer } from './officeOptionsView.styles';
import { OfficeNavButton } from '../../components/appNav';
import car from '/iconography/CarBlack.svg';
import fire from '/iconography/FireBlack.svg';
import tree from '/iconography/TreeBlack.svg';
import service from '/iconography/FindOfficeBlack.svg';
import hospital from '/iconography/HospitalBlack.svg';
import Services from '../../enums/Services';

export default function OfficeOptionsView() {
  return (
    <ViewContainer>
      <ContentContainer>
        <OfficeNavButton
          hex="#ADD8E6"
          text="Service BC"
          icon={service}
          disabled={false}
          route={Services.serviceBC}
        />
        <OfficeNavButton
          hex="#FFF4AE"
          text="ICBC"
          icon={car}
          disabled={false}
          route={Services.icbc}
        />
        <OfficeNavButton
          hex="#FFA500"
          text="Health BC"
          icon={hospital}
          disabled={false}
          route={Services.healthBC}
        />
        <OfficeNavButton
          hex="#90EE90"
          text="Parks BC"
          icon={tree}
          disabled={false}
          route={Services.parksBC}
        />
        <OfficeNavButton
          hex="#F54029"
          text="FireBC"
          icon={fire}
          disabled={false}
          route={Services.fireBC}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
