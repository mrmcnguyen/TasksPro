import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetails() {
  const { taskId } = useParams<{ taskId: string }>();

  // Fetch and display task details using taskId

  return (
    <div>
      <h2>Task Details</h2>
      {/* Task details rendering goes here */}
    </div>
  );
}

export default TaskDetails;
