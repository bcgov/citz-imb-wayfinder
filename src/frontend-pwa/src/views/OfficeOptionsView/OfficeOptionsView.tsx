/**
 * @summary Allows user to see list of possible Service types
 *          For demonstration purposes we have listed multiple options
 *          ICBC is set to disabled for the purpose of presentation of disabled attribute
 * @author LocalNewsTV
 */
import { useState } from 'react';
import { ContentContainer, ViewContainer } from './officeOptionsView.styles';
import { OfficeNavButton } from '../../components/appNav';
import car from '/iconography/CarColor.svg';
import tree from '/iconography/TreeColor.svg';
import service from '/iconography/FindOfficeColorServe.svg';
import plus from '/iconography/PlusColor.svg';
import Services from '../../enums/Services';
import { officeOptionsContent } from '../../content/content';

export default function OfficeOptionsView() {
  const [lang] = useState('eng');
  return (
    <ViewContainer>
      <ContentContainer>
        <OfficeNavButton
          hex="#D6ECF3"
          text={officeOptionsContent.serviceBC[lang]}
          icon={service}
          route={Services.serviceBC}
        />
        <OfficeNavButton
          hex="#EBD6F3"
          text={officeOptionsContent.icbc[lang]}
          icon={car}
          route={Services.icbc}
        />
        <OfficeNavButton
          hex="#F3DDD6"
          text={officeOptionsContent.healthBC[lang]}
          icon={plus}
          route={Services.healthBC}
        />
        <OfficeNavButton
          hex="#DEF3D6"
          text={officeOptionsContent.parksBC[lang]}
          icon={tree}
          route={Services.parksBC}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
