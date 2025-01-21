import StoriesList from '../components/story/StoriesList';
import HeadlinesList from '../components/headlines/HeadlinesList';

const Home = () => {

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
