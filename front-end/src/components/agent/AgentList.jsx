import React from 'react'
import { useState } from 'react';


const agentsData = [
  {
    name: "Rahul Sharma",
    code: "AGT001",
    mobile: "+919876543210",
    email: "rahul.sharma@example.com",
    status: "Active",
  },
  {
    name: "Amit Verma",
    code: "AGT002",
    mobile: "+919812345678",
    email: "amit.verma@example.com",
    status: "Inactive",
  },
  {
    name: "Neha Gupta",
    code: "AGT003",
    mobile: "+919900112233",
    email: "neha.gupta@example.com",
    status: "Active",
  },
  {
    name: "Suresh Kumar",
    code: "AGT004",
    mobile: "+919811223344",
    email: "suresh.kumar@example.com",
    status: "Active",
  },
  {
    name: "Pooja Singh",
    code: "AGT005",
    mobile: "+919822334455",
    email: "pooja.singh@example.com",
    status: "Inactive",
  },
  {
    name: "Rohit Meena",
    code: "AGT006",
    mobile: "+919833445566",
    email: "rohit.meena@example.com",
    status: "Active",
  },
  {
    name: "Kavita Joshi",
    code: "AGT007",
    mobile: "+919844556677",
    email: "kavita.joshi@example.com",
    status: "Inactive",
  },
  {
    name: "Ankit Patel",
    code: "AGT008",
    mobile: "+919855667788",
    email: "ankit.patel@example.com",
    status: "Active",
  },
  {
    name: "Sunita Yadav",
    code: "AGT009",
    mobile: "+919866778899",
    email: "sunita.yadav@example.com",
    status: "Active",
  },
  {
    name: "Vikas Malhotra",
    code: "AGT010",
    mobile: "+919877889900",
    email: "vikas.malhotra@example.com",
    status: "Inactive",
  },
];


function AgentList() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const filteredAgents = agentsData.filter(
        agent =>
            agent.name.toLowerCase().includes(search.toLowerCase()) ||
            agent.code.toLowerCase().includes(search.toLowerCase()) ||
            agent.mobile.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredAgents.length / pageSize);
    const paginatedAgents = filteredAgents.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className='row'>
            <div className='col-12'>
                <div className="card stretch stretch-full">
                    <div className="card-body">
                        <div className="mb-3 d-flex justify-content-end">
                            <input
                                type="text"
                                className="mb-3 d-flex justify-content-end"
                                placeholder="Search agents..."
                                value={search}
                                onChange={e => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                            />
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Agent Name</th>
                                        <th>Agent Code</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedAgents.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="text-center">No agents found.</td>
                                        </tr>
                                    ) : (
                                        paginatedAgents.map((agent, idx) => (
                                            <tr key={idx}>
                                                <td>{agent.name}</td>
                                                <td>{agent.code}</td>
                                                <td>{agent.mobile}</td>
                                                <td>{agent.email}</td>
                                                <td>
                                                    <span className={`badge bg-${agent.status === 'Active' ? 'success' : 'danger'}`}>
                                                        {agent.status}
                                                    </span>
                                                </td>
                                                <td>
                                                     <div className="d-inline-flex align-items-center gap-2">
                                                        <button
                                                        className="btn btn-sm btn-light-primary text-primary action-btn"
                                                        title="Edit"
                                                        >
                                                        <i className="feather-edit-2"></i>
                                                        </button>

                                                        <button
                                                        className="btn btn-sm btn-light-danger text-danger action-btn"
                                                        title="Delete"
                                                        >
                                                        <i className="feather-trash-2"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <nav className="mt-3">
                            <ul className="pagination justify-content-end mb-0">
                                <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setPage(page - 1)} disabled={page === 1}>
                                        Previous
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, i) => (
                                    <li key={i} className={`page-item${page === i + 1 ? ' active' : ''}`}>
                                        <button className="page-link" onClick={() => setPage(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item${page === totalPages || totalPages === 0 ? ' disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setPage(page + 1)} disabled={page === totalPages || totalPages === 0}>
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentList;