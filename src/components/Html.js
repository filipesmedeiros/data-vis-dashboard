import React from 'react';

// This is ugly to have inside the normal code, so we use this wrapper
// Use: <Html html={htmlString}/>
export default ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;
