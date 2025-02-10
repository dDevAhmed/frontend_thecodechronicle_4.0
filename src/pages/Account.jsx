import { useEffect } from 'react'
import PageTitle from '../ui/PageTitle';

const Account = () => {
  // always land at the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className='flex flex-col gap-5 pb-20'>

      <PageTitle>Account</PageTitle>
    </div>
  )
}

export default Account