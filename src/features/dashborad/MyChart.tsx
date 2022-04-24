import { Segment } from 'semantic-ui-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Patients Activity',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Patient Old',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      backgroundColor: 'rgba(44, 101, 241, 0.7)',
    },
    {
      label: 'Patient New',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      backgroundColor: 'rgba(39, 201, 169, 0.7)',
    },
  ],
};

export default function MyChart() {
  return (

    <Segment >
      <div className='con-chart'>
        <Bar width={580} height={200} options={options} data={data} />
      </div>
    </Segment>

  )
}
