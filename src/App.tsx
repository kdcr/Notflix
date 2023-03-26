import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailView from './components/views/detailView';
import ExploreView from './components/views/exploreView';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ExploreView />,
    },
    {
      path: '/detail',
      element: <DetailView />,
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
