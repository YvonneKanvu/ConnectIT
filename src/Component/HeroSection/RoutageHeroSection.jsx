import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';
function RoutageHeroSection() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeroSection />,
    },
    // ... autres routes si nécessaire
  ]);

  return (
    <RouterProvider router={router}>
      <HeroSection />
    </RouterProvider>
  );
}


export default RoutageHeroSection;