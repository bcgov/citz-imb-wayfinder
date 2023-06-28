/**
 * @summary 404 Page that returns to home, and references the url provided in its error message
 * @author LocalNewsTV
 */
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/common';
import {
  Bold,
  ContentContainer,
  HeaderTwo,
  Soft,
  Text,
  TextContainer,
  ViewContainer,
} from './NotFound.style';

function NotFound() {
  const route = useLocation();
  return (
    <ViewContainer>
      <ContentContainer>
        <TextContainer>
          <HeaderTwo>
            Not Found
          </HeaderTwo>
        </TextContainer>
        <TextContainer>
          <Text>
            <Bold>404.&nbsp;</Bold>
            <Soft>That&apos;s an error</Soft>
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            {`The requested URL\u00a0\u00a0${route.pathname} was not found on this server.`}
            <Soft>
              &nbsp;That&apos;s all we know
            </Soft>
          </Text>
        </TextContainer>
        <TextContainer>
          <Link to="/">
            <Button
              text="Go Home"
              size="sm"
              variant="primary"
              disabled={false}
            />
          </Link>
        </TextContainer>
      </ContentContainer>
    </ViewContainer>
  );
}

export default NotFound;
