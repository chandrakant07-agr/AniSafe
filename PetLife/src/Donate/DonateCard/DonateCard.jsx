import React, { useState } from 'react';
import './DonateCard.css';

function DonateCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name} for donating $${amount}!`);
  };

  return (
    <div className="donate-card">
      <h2>Support Our Cause</h2>
      <p>Your donation can make a difference.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        <label htmlFor="amount">Donation Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in USD"
          required
        />

        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default DonateCard;
