import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-secondary">Reactions</span>
      </div>
      <div className="card-body">
        {reactions &&
          reactions.map(reaction => (
            <p className="mb-1 text-tertiary" key={reaction._id}>
              {reaction.reactionBody} {'// '}
              <Link to={`/profile/${reaction.username}`} className="text-dark">
                <span style={{ fontWeight: 700 }}>{reaction.username}</span> on {reaction.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>

  );
};

export default ReactionList;