import React, { useState, useEffect } from 'react';

const ClientManager: React.FC = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const fetchClients = async () => {
    const res = await fetch('/api/clients');
    const data = await res.json();
    setClients(data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', company: '', email: '', phone: '' });
    fetchClients();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Client Database</h2>
      <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-2 gap-4 max-w-2xl">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2" />
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="border p-2" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2" />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2" />
        <button type="submit" className="col-span-2 bg-green-600 text-white p-2 rounded">Add Client</button>
      </form>

      <ul className="space-y-2">
        {clients.map((client) => (
          <li key={client.id} className="border p-3 rounded bg-white shadow">
            <p className="font-bold">{client.name} – {client.company}</p>
            <p>{client.email} | {client.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientManager;
