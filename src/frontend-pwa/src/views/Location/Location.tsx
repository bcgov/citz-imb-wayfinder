import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';

export type LocationProps = {
  locations: Array<SingleLocation>;
}

export default function Location({
  locations,
}: LocationProps) {
  return (
    <div>
      <h2>
        Locate a Service
      </h2>
      <ListItems items={locations} />
    </div>
  );
}
