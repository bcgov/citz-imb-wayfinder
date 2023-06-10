import map from '/PlaceholderImageMap.png';
import { StyledImg, StyledMap } from './mapping.styles';

function Mapping() {
  return (
    <StyledMap>
      <StyledImg src={map} alt="Placeholder Map" />
    </StyledMap>
  );
}

export default Mapping;
