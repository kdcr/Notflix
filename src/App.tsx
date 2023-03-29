import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import DetailView from './components/views/detailView';
import ExploreView from './components/views/exploreView';
import { store } from './redux/store';
import Header from './components/molecular/Header/Header';

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

  const queryClient = new QueryClient();

  return (
    <div className="w-screen h-screen">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Header>
            <RouterProvider router={router} />
          </Header>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
