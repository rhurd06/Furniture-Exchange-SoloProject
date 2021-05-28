import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p> Are you downsizing? Redecorating? Just moved and are in need of 
          furniture? Sound familiar, check out my app. Just follow the  
          'Register Here' link to create an account. It will automatically 
          log you in and then you'll be free to browse available items,add 
          items of own to sell, and view your items. Logged in users can 
          edit or delete the items they have uploaded to the app.
        </p>
        {/* <p>
          To learn how I created this app check out my github at: 
          <br />
          ![github](https://github.com/rhurd06/Furniture-Exchange-SoloProject)
        </p> */}
      </div>
    </div>
  );
}

export default AboutPage;
