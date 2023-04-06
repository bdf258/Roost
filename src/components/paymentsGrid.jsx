import * as React from 'react';
import PaymentsCard from './paymentsCard.jsx'

const payments = [
  { title: 'Utilities', total: 150, monthly: 'ends Jan 23' },
  { title: 'Dishwasher', total: 40, monthly: 'ends Dec 23' },
];

export default function PaymentsGrid({ payment, index }) {
  return (
      <div>
        {payments.map((payment, index) => (
          <PaymentsCard
            key={index}
            title={payment.title}
            total={`£${payment.total}`}
            monthly={payment.monthly}
          />
      ))}
    </div>
  );
}