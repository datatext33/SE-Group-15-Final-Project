import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import SearchPage from './SearchPage';

const container = document.getElementById('app');
const root = createRoot(container);
// Nested routes are displayed with outlet tag
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
