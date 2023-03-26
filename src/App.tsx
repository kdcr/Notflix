import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailView from './components/views/detailView';
import ExploreView from './components/views/exploreView';
import { store } from './redux/store';

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
