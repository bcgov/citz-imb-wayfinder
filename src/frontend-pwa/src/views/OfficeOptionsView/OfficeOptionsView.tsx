/**
 * @summary Allows user to see list of possible Service types
 *          For demonstration purposes we have listed multiple options
 *          ICBC is set to disabled for the purpose of presentation of disabled attribute
 * @author LocalNewsTV
 */
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
          route={Services.serviceBC}
        />
        <OfficeNavButton
          hex="#FFF4AE"
          text="ICBC"
          icon={car}
          disabled
          route={Services.icbc}
        />
        <OfficeNavButton
          hex="#FFA500"
          text="Health BC"
          icon={hospital}
          route={Services.healthBC}
        />
        <OfficeNavButton
          hex="#90EE90"
          text="Parks BC"
          icon={tree}
          route={Services.parksBC}
        />
        <OfficeNavButton
          hex="#F54029"
          text="FireBC"
          icon={fire}
          route={Services.fireBC}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
