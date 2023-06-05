/**
 * @summary Reusable settings button navigation component
 * @author Dallas Richmond
 */
import { useLocation } from 'react-router-dom';
import gear from '/gear-icon.svg';
import {
  StyledSettingsButton,
  StyledIcon,
} from './settingsNavButton.styles';

export default function BackNavButton() {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <StyledSettingsButton type="button" aria-label="Settings button">
        <StyledIcon src={gear} alt="Settings" />
      </StyledSettingsButton>
    );
  }

  return (
    <div />
  );
}
