import React, { useState, useEffect } from 'react';
import { FaUserPlus, FaSearch, FaFilter, FaFileExport, FaGoogle, FaLinkedin, FaTwitter, FaUserEdit, FaTrash } from 'react-icons/fa';

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  signupMethod: 'manual' | 'google' | 'linkedin' | 'twitter';
  status: 'active' | 'lead' | 'inactive';
  lastContact: string;
}

const ClientManager: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'manual' | 'social'>('all');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });
  const [isAddingClient, setIsAddingClient] = useState(false);

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockClients: Client[] = [
      {
        id: '1',
        name: 'María González',
        company: 'Fruta Fresca Inc.',
        email: 'maria@frutafresca.com',
        phone: '+54 11 1234-5678',
        signupMethod: 'google',
        status: 'active',
        lastContact: '2025-04-08'
      },
      {
        id: '2',
        name: 'Carlos Mendoza',
        company: 'Citrus Distributors',
        email: 'carlos@cdistributors.com',
        phone: '+54 351 555-1234',
        signupMethod: 'linkedin',
        status: 'active',
        lastContact: '2025-04-05'
      },
      {
        id: '3',
        name: 'Ana López',
        company: 'Tropical Fruits SA',
        email: 'ana@tropicalfruits.com',
        phone: '+54 11 9876-5432',
        signupMethod: 'manual',
        status: 'lead',
        lastContact: '2025-03-28'
      },
      {
        id: '4',
        name: 'Roberto Sánchez',
        company: 'Exportadora del Norte',
        email: 'roberto@exportnorte.com',
        phone: '+54 387 444-7890',
        signupMethod: 'twitter',
        status: 'active',
        lastContact: '2025-04-10'
      },
      {
        id: '5',
        name: 'Lucía Fernández',
        company: 'Mercado Frutal',
        email: 'lucia@mercadofrutal.com',
        phone: '+54 261 333-4567',
        signupMethod: 'manual',
        status: 'inactive',
        lastContact: '2025-02-15'
      }
    ];
    setClients(mockClients);
    setFilteredClients(mockClients);
  }, []);

  useEffect(() => {
    let results = clients;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply signup method filter
    if (activeFilter === 'manual') {
      results = results.filter(client => client.signupMethod === 'manual');
    } else if (activeFilter === 'social') {
      results = results.filter(client => client.signupMethod !== 'manual');
    }
    
    setFilteredClients(results);
  }, [searchTerm, activeFilter, clients]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newClient: Client = {
      id: Date.now().toString(),
      ...formData,
      signupMethod: 'manual',
      status: 'lead',
      lastContact: new Date().toISOString().split('T')[0]
    };
    setClients([...clients, newClient]);
    setFormData({ name: '', company: '', email: '', phone: '' });
    setIsAddingClient(false);
  };

  const getSignupIcon = (method: string) => {
    switch (method) {
      case 'google': return <FaGoogle className="text-red-500" />;
      case 'linkedin': return <FaLinkedin className="text-blue-600" />;
      case 'twitter': return <FaTwitter className="text-blue-400" />;
      default: return <FaUserEdit className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'lead': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Client Database
          </h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsAddingClient(true)}
              className="px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-lg flex items-center hover:shadow-md transition-all"
            >
              <FaUserPlus className="mr-2" />
              Add Client
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search clients..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg flex items-center ${activeFilter === 'all' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`}
              >
                <FaFilter className="mr-2" />
                All Clients
              </button>
              <button 
                onClick={() => setActiveFilter('manual')}
                className={`px-4 py-2 rounded-lg flex items-center ${activeFilter === 'manual' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`}
              >
                Manual Entries
              </button>
              <button 
                onClick={() => setActiveFilter('social')}
                className={`px-4 py-2 rounded-lg flex items-center ${activeFilter === 'social' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`}
              >
                Social Signups
              </button>
            </div>
          </div>
        </div>

        {/* Add Client Form (Modal) */}
        {isAddingClient && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Client</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddingClient(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-lg hover:shadow-md"
                  >
                    Save Client
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Clients Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Showing {filteredClients.length} clients
            </h2>
            <button className="flex items-center text-sm text-orange-600 hover:text-orange-800">
              <FaFileExport className="mr-1" />
              Export
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signup</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {client.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{client.email}</div>
                      <div className="text-sm text-gray-500">{client.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getSignupIcon(client.signupMethod)}
                        <span className="ml-2 capitalize">{client.signupMethod}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.lastContact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-orange-600 hover:text-orange-900 mr-3">
                        <FaUserEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">{filteredClients.length}</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientManager;