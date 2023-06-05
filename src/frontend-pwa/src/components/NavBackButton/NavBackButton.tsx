/**
 * @summary Reusable back button navigation component
 * @author Dallas Richmond
 */
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  if (location.pathname !== '/') {
    return (
      <button type="button" onClick={goBack}>Back</button>
    );
  }

  return (
    <div />
  );
}
