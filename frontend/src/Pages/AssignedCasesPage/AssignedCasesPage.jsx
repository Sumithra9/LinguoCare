import React from 'react';

const AssignedCasesPage = () => {
  const selectedTherapist = JSON.parse(localStorage.getItem('selectedTherapist'));
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Filter users based on the selected therapist
  const assignedUsers = users.filter(user => user.selectedTherapist === selectedTherapist?.name);

  return (
    <div>
      <h2>Assigned Cases for {selectedTherapist?.name}</h2>
      {assignedUsers.length > 0 ? (
        assignedUsers.map((assignedUser, index) => (
          <div key={index}>
            <h3>{assignedUser.name}</h3>
            <p>Case Details: {assignedUser.caseDetails}</p>
          </div>
        ))
      ) : (
        <p>No assigned cases.</p>
      )}
    </div>
  );
};

export default AssignedCasesPage;
