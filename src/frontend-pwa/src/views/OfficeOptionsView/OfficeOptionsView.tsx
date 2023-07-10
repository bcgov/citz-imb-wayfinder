/**
 * @summary Allows user to see list of possible Service types
 *          For demonstration purposes we have listed multiple options
 *          ICBC is set to disabled for the purpose of presentation of disabled attribute
 * @author LocalNewsTV
 */
import { ContentContainer, ViewContainer } from './officeOptionsView.styles';
import { OfficeNavButton } from '../../components/appNav';
import car from '/iconography/CarColor.svg';
import service from '/iconography/FindOfficeColorServe.svg';
import plus from '/iconography/PlusColor.svg';
import Services from '../../enums/Services';
import house from '/iconography/BCHousing.svg';
import court from '/iconography/Courthouse.svg';

import { officeOptionsContent } from '../../content/content';
import useAppService from '../../services/app/useAppService';

export default function OfficeOptionsView() {
  const { state } = useAppService();
  const { lang } = state.settings;
  return (
    <ViewContainer>
      <ContentContainer>
        <OfficeNavButton
          hex="#D1E6BF"
          text={officeOptionsContent.serviceBC[lang]}
          icon={service}
          route={Services.serviceBC}
        />
        <OfficeNavButton
          hex="#C9F2EF"
          text={officeOptionsContent.icbc[lang]}
          icon={car}
          route={Services.icbc}
        />
        <OfficeNavButton
          hex="#9BCCC8"
          text={officeOptionsContent.healthBC[lang]}
          icon={plus}
          route={Services.healthBC}
        />
        <OfficeNavButton
          hex="#EDA6A2"
          text={officeOptionsContent.courts[lang]}
          icon={court}
          route={Services.courts}
        />
        <OfficeNavButton
          hex="#FCCFB0"
          text={officeOptionsContent.bcHousing[lang]}
          icon={house}
          route={Services.bcHousing}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
