import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Ben',
  score: 99
}, {
  _id: '2',
  name: 'James',
  score: 2
}, {
  _id: '3',
  name: 'Matt',
  score: 104
}];

const renderPlayers = function (playersList) {

  return newNumbers = playersList.map(function (player) {
    return <p key={player._id}>{player.name + ':'} {player.score} point(s)</p>;
  });
};

Meteor.startup(function () {
  let title = 'Score Keep';
  let name = 'Ben';
  let jsx = (
    <div>
      {/* jsx comment */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>another</p>

      {/* display jsx list */}
      {renderPlayers(players)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
