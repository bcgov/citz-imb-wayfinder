import ListItems from '../../components/ListItems/ListItems';

export type LocationProps = {
  locations: Array<object>;
}

export default function Location({
  locations,
}: LocationProps) {
  return (
    <div>
      <h2>
        Locate a Service
      </h2>
      <ListItems data={locations} />
    </div>
  );
}
