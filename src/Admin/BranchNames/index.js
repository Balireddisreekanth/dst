import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './index.css';

// Bind modal to app element for accessibility
Modal.setAppElement('#root');

const BranchNames = () => {
  const [branches, setBranches] = useState([]);
  const [newBranch, setNewBranch] = useState({ branchName: '', managerEmail: '' });
  const [editBranch, setEditBranch] = useState({ id: '', branchName: '', managerEmail: '' });
  const [selectedBranchId, setSelectedBranchId] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${api}/admin/branches`);
        setBranches(response.data);
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };

    fetchBranches();
  }, [api]);

  const handleAddBranch = async () => {
    try {
      await axios.post(`${api}/admin/branches`, newBranch);
      alert('Branch added successfully');
      setNewBranch({ branchName: '', managerEmail: '' });
      setIsAddModalOpen(false);
      // fetchBranches(); // Uncomment if you want to refresh the list
    } catch (error) {
      console.error('Error adding branch:', error);
    }
  };

  const handleEditBranch = async () => {
    try {
      await axios.put(`${api}/admin/branches/${editBranch.id}`, editBranch);
      alert('Branch updated successfully');
      setEditBranch({ id: '', branchName: '', managerEmail: '' });
      setIsEditModalOpen(false);
      // fetchBranches(); // Uncomment if you want to refresh the list
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };

  const handleDeleteBranch = async () => {
    try {
      await axios.delete(`${api}/admin/branches/${selectedBranchId}`);
      alert('Branch deleted successfully');
      setIsDeleteModalOpen(false);
      // fetchBranches(); // Uncomment if you want to refresh the list
    } catch (error) {
      console.error('Error deleting branch:', error);
    }
  };

  return (
    <div className='managerdss'>
      <h1>Admin Branch Management</h1>

      <button onClick={() => setIsAddModalOpen(true)}>Add New Branch</button><br/>
      <button className='addmodel' onClick={() => setIsDeleteModalOpen(true)}>Delete Branch</button>
    
      {/* Add Branch Modal */}
      <Modal isOpen={isAddModalOpen} onRequestClose={() => setIsAddModalOpen(false)} contentLabel="Add Branch">
        <h2>Add New Branch</h2>
        <input
          type="text"
          placeholder="Branch Name"
          value={newBranch.branchName}
          onChange={(e) => setNewBranch({ ...newBranch, branchName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Manager Email"
          value={newBranch.managerEmail}
          onChange={(e) => setNewBranch({ ...newBranch, managerEmail: e.target.value })}
        />
        <button onClick={handleAddBranch}>Add Branch</button>
        <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
      </Modal>

      {/* Edit Branch Modal */}
      <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)} contentLabel="Edit Branch" className='brancj'>
        <h2>Edit Branch</h2>
        <select onChange={(e) => {
          const selectedBranch = branches.find(branch => branch.id === e.target.value);
          setEditBranch(selectedBranch);
        }}>
          <option value="">Select Branch</option>
          {branches.map(branch => (
            <option key={branch.id} value={branch.id}>{branch.branchName}</option>
          ))}
        </select>
        {editBranch.id && (
          <>
            <input
              type="text"
              value={editBranch.branchName}
              onChange={(e) => setEditBranch({ ...editBranch, branchName: e.target.value })}
            />
            <input
              type="email"
              value={editBranch.managerEmail}
              onChange={(e) => setEditBranch({ ...editBranch, managerEmail: e.target.value })}
            />
            <button onClick={handleEditBranch}>Update Branch</button>
            <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
          </>
        )}
      </Modal>

      {/* Delete Branch Modal */}
      <Modal isOpen={isDeleteModalOpen} onRequestClose={() => setIsDeleteModalOpen(false)} contentLabel="Delete Branch">
        <h2>Delete Branch</h2>
        <select onChange={(e) => setSelectedBranchId(e.target.value)}>
          <option value="">Select Branch to Delete</option>
          {branches.map(branch => (
            <option key={branch.id} value={branch.id}>{branch.branchName}</option>
          ))}
        </select>
        <button onClick={handleDeleteBranch}>Delete Branch</button>
        <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
      </Modal>

      {/* Display Branches in Table */}
      <div>
        <h2>Current Branches</h2>
        <table>
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Manager Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {branches.map(branch => (
              <tr key={branch.id}>
                <td>{branch.branchName}</td>
                <td>{branch.managerEmail}</td>
                <td>
                  <button onClick={() => {
                    setEditBranch(branch);
                    setIsEditModalOpen(true);
                  }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchNames;
