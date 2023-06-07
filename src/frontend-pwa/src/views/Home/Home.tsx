/**
 * @summary The main view for the application
 * @author Dallas Richmond
 */
import { Button } from '../../components/Button/Button';
import RoutingLink from '../../components/RoutingLink/RoutingLink';

import {
  Wrapper,
  ButtonWrapper,
} from './home.styles';

export default function Home() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <RoutingLink
          content={
            (
              <Button
                variant="primary"
                size="lg"
                disabled={false}
                text="Locate a Service"
              />
            )
          }
          path="/location"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <RoutingLink
          content={
            (
              <Button
                variant="primary"
                size="lg"
                disabled={false}
                text="Find BC Services"
              />
            )
          }
          path="/services"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <RoutingLink
          content={
            (
              <Button
                variant="primary"
                size="lg"
                disabled={false}
                text="Report an Event"
              />
            )
          }
          path="/report"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
