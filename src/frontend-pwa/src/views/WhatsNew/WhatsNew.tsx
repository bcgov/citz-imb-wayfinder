/**
 * @desc   View section for displaying all changelog information in the Wayfinder application
 *         Iterates over the ChangeLog object file, displaying information as an unordered list
 * @author LocalNewsTV
 */
import {
  ContentContainer,
  List,
  ListItem,
  SectionHeader,
  UpdateContainer,
  UpdateHeader,
  ViewContainer,
} from './whatsNew.styles';
import useAppService from '../../services/app/useAppService';
import ChangeLog from '../../content/changelogContent';

function WhatsNew() {
  const { state } = useAppService();
  const entries = Object.entries(ChangeLog);
  const { lang } = state.settings;
  return (
    <ViewContainer>
      <ContentContainer>
        <SectionHeader>What&apos;s New?</SectionHeader>
        <List>
          {entries.map(([key, value], entryNum) => (
            <UpdateContainer>
              <UpdateHeader>
                v
                {key}
              </UpdateHeader>
              <List>
                {value[lang].map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ListItem key={`${entryNum}${index}`}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </UpdateContainer>
          ))}
        </List>
      </ContentContainer>
    </ViewContainer>
  );
}

export default WhatsNew;
