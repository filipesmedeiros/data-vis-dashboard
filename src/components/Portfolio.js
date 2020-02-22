import React from 'react';

export default ({ entries }) => (
    <div>
        {entries.map((entry, key) => (
            <div key={key}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <img src={entry.thumbnailUrl} alt={entry.thumbnailAlt} />
                <br />
            </div>
        ))}
    </div>
);
