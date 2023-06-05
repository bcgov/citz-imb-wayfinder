/* eslint-disable jsx-a11y/control-has-associated-label */
/**
 * @summary Reusable back button navigation component
 * @author Dallas Richmond
 */
import { useNavigate, useLocation } from 'react-router-dom';
import backButton from '/back-button.svg';
import {
  StyledBackButton,
  StyledIcon,
} from './backNavButton.styles';

export default function BackNavButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  if (location.pathname !== '/') {
    return (
      <StyledBackButton aria-label="Back Button" type="button" onClick={goBack}>
        <StyledIcon src={backButton} alt="Back Button" />
      </StyledBackButton>
    );
  }

  return (
    <div />
  );
}
