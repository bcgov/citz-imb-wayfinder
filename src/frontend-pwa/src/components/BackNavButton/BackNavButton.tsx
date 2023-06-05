/* eslint-disable jsx-a11y/control-has-associated-label */
/**
 * @summary Reusable back button navigation component
 * @author Dallas Richmond
 */
import { useNavigate, useLocation } from 'react-router-dom';

export default function BackNavButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  if (location.pathname !== '/') {
    return (
      <button aria-label="Back Button" type="button" onClick={goBack} />
    );
  }

  return (
    <div />
  );
}
