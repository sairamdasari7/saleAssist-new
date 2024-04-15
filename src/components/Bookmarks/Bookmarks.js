import React, { useState } from 'react';

const BookmarksPage = () => {
  const [bookmarks] = useState([]);

  return (
    <div>
      <h1>Bookmark Page</h1>
      <ul>
        {bookmarks.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarksPage;
