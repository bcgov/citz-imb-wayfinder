import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';

import {
  LocationViewWrapper,
  TextHeader,
} from './location.styles';

export type LocationProps = {
  locations: Array<SingleLocation>;
}

export default function Location({
  locations,
}: LocationProps) {
  return (
    <LocationViewWrapper>
      <TextHeader>
        Locate a Service
      </TextHeader>
      <ListItems items={locations} />
    </LocationViewWrapper>
  );
}
