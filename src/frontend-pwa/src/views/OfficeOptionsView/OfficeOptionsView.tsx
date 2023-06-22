import React from 'react';
import { ContentContainer, ViewContainer } from './officeOptionsView.styles';
import { OfficeNavButton } from '../../components/appNav';
import car from '/iconography/CarBlack.svg';
import fire from '/iconography/FireBlack.svg';
import tree from '/iconography/TreeBlack.svg';
import service from '/iconography/FindOfficeBlack.svg';
import hospital from '/iconography/HospitalBlack.svg';

export default function OfficeOptionsView() {
  return (
    <ViewContainer>
      <ContentContainer>
        <OfficeNavButton
          hex="#ADD8E6"
          text="Service BC"
          icon={service}
          disabled={false}
        />
        <OfficeNavButton
          hex="#90EE90"
          text="Parks BC"
          icon={tree}
          disabled={false}
        />
        <OfficeNavButton
          hex="#FFA500"
          text="Health BC"
          icon={hospital}
          disabled={false}
        />
        <OfficeNavButton
          hex="#FFF4AE"
          text="ICBC"
          icon={car}
          disabled={false}
        />
        <OfficeNavButton
          hex="#F54029"
          text="FireBC"
          icon={fire}
          disabled={false}
        />
      </ContentContainer>
    </ViewContainer>
  );
}
