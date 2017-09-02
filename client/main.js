import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  let title = 'Score Keep';
  let name = 'Ben';
  let jsx = (
    <div>
      {/* jsx comment */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>another</p>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
