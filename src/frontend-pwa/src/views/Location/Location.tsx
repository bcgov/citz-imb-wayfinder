import ListItems from '../../components/ListItems/ListItems';

export default function Location() {
  const testData = {
    locations: [
      {
        External_Site: '', Address: '123 Street', Locality: 'Victoria', Site_Phone_No: '555-555-5555', Site_Fax_no: '555-555-1234', Website_URL: 'https://google.ca', Site_Email: 'anEmail@email.com', Latitude: 10.27, Longitude: 13.43, Office_Code: '00073', id: '6474f8509c4d19bce486df3a',
      }, {
        External_Site: '', Address: '124 Street', Locality: 'Victoria', Site_Phone_No: '555-555-5555', Site_Fax_no: '555-555-1234', Website_URL: 'https://google.ca', Site_Email: 'anEmail@email.com', Latitude: 10.27, Longitude: 13.43, Office_Code: '00073', id: '6474f8509c4d19bce486df3b',
      },
    ],
  };

  return (
    <div>
      <h2>
        Locate a Service
      </h2>
      <ListItems items={testData.locations} />
    </div>
  );
}
