import { useEffect } from 'react'
import StoriesList from '../components/story/StoriesList';
import HeadlinesList from '../components/headlines/HeadlinesList';

const Home = () => {
  // always land at the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="flex flex-col gap-5 pb-10">
      {/* headlines */}
      <HeadlinesList />

      {/* feed */}
      <StoriesList />
    </div>
  );
};

export default Home;
