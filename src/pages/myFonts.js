// // pages/myfonts.tsx
// import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
// import AlphabetsList from '../components/AlphabetsList';

// const Home = () => {
//   const [fonts, setFonts] = useState([

//   ]);

// const handleDelete = (id) => {
//   const newFonts = blogs.filter(font => font.id !== id);
//   setBlogs(newFonts);
// }

// useEffect(() => {
//   console.log('use effect ran');
// }, []);

// return (
//   <div className="home">
//     <Nav></Nav>
//     <AlphabetsList fonts={fonts} title="All Fonts!" handleDelete={handleDelete} />
//   </div>
// );
// }

// export default Home;

import React from 'react';

const fontListPage = () => {
  return (
    <div>
      <Nav></Nav>
      <h1>Will be page to show saved fonts</h1>
      <p>placehold</p>
    </div>
  );
};

export default fontListPage;