import { useState } from 'react';

export type ReportProps = {
    latitude: number;
    longitude: number;
    date: Date;
    eventType: string;
    details: string;
    phone?: string;
  }

export function Report({
    latitude,
    longitude,
    date,
    eventType,
    details,
    phone
}:ReportProps) {

  const [report, setReport] = useState<ReportProps>({
    latitude: 0,
    date: Date.now(),
    location: '',
    description: '',
    type: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform additional validation here before submitting the form
    console.log('Submitted report:', report);
    // TODO: Add your logic to send the report data to the server or perform any necessary actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Report Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={report.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Report Description:</label>
        <textarea
          id="description"
          name="description"
          value={report.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Report Type:</label>
        <select
          id="type"
          name="type"
          value={report.type}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Report Type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="type3">Type 3</option>
          <option value="type4">Type 4</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Report.defaultProps = {
  phone: 0,
};
