import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>This app will allow you to browse Available Furniture, sell items you no longer want
        and edit/delete those items as needed. There is a heart icon on each item in the Browse
        Furniture page that you indicates it as favorite of yours when clicked. You may navigate
        to the different views through the menu at the top left.
      </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
