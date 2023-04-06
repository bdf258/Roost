import * as React from 'react';
import PaymentsCard from './paymentsCard.jsx'

const pots = [
  { title: 'Rent Holidays', total: 1200, monthly: 100 },
  { title: 'Donations', total: 500, monthly: 50 },
];

export default function PotsGrid({ pot, index }) {
  return (
    <div>
      {pots.map((payment, index) => (
        <PaymentsCard
          key={index}
          title={payment.title}
          total={`£${payment.total}`}
          monthly={`£${payment.monthly}/mo`}
        />
      ))}
    </div>
  );
}