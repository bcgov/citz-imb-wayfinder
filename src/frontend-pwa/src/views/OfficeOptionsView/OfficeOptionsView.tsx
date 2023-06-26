/**
 * @summary Allows user to see list of possible Service types
 *          For demonstration purposes we have listed multiple options
 *          ICBC is set to disabled for the purpose of presentation of disabled attribute
 * @author LocalNewsTV
 */
import { ContentContainer, ViewContainer } from './officeOptionsView.styles';
import { OfficeNavButton } from '../../components/appNav';
import car from '/iconography/CarColor.svg';
import tree from '/iconography/TreeColor.svg';
import service from '/iconography/FindOfficeColorServe.svg';
import plus from '/iconography/PlusColor.svg';
import Services from '../../enums/Services';

export default function OfficeOptionsView() {
  return (
    <ViewContainer>
      <ContentContainer>
        <OfficeNavButton
          hex="#D6ECF3"
          text="Service BC"
          icon={service}
          route={Services.serviceBC}
        />
        <OfficeNavButton
          hex="#EBD6F3"
          text="ICBC"
          icon={car}
          route={Services.icbc}
        />
        <OfficeNavButton
          hex="#F3DDD6"
          text="Health BC"
          icon={plus}
          route={Services.healthBC}
        />
        <OfficeNavButton
          hex="#DEF3D6"
          text="Parks BC"
          icon={tree}
          route={Services.parksBC}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
