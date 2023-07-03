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
import { notFoundContent } from '../../content/content';
import useAppService from '../../services/app/useAppService';

function NotFound() {
  const { state } = useAppService();
  const { lang } = state.settings;
  const route = useLocation();
  return (
    <ViewContainer>
      <ContentContainer>
        <TextContainer>
          <HeaderTwo>
            {notFoundContent.notFound[lang]}
          </HeaderTwo>
        </TextContainer>
        <TextContainer>
          <Text>
            <Bold>404.&nbsp;</Bold>
            <Soft>{notFoundContent.anError[lang]}</Soft>
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            {`${notFoundContent.requestedURL[lang]}${route.pathname}${notFoundContent.notFoundHere[lang]}`}
            <Soft>
              {notFoundContent.allWeKnow[lang]}
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
