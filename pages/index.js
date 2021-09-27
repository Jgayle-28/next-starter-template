import { useEffect, useState, useContext } from 'react';
import ContainerBlock from '@components/common/ContainerBlock';
import Hero from '@components/Hero';
import useScrollBlock from '@hooks/useScrollBlock';
import AppContext from 'context/appContext';

export default function Home({ repositories }) {
  const appContext = useContext(AppContext);
  const { setInitialLoad, initialLoad } = appContext;

  const [blockScroll, allowScroll] = useScrollBlock();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    demoAsyncCall().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Disable scrolling for any animation
      blockScroll();
      // Allow scrolling after animation
      setTimeout(() => handleAfterAnimation(), 3500);
    }
  }, [isLoading]);

  const handleAfterAnimation = () => {
    allowScroll();
    setInitialLoad(false);
  };

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  return (
    <>
      {initialLoad && isLoading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <h1 className='font-bold font-3xl'>Add your loader here</h1>
        </div>
      ) : (
        <ContainerBlock
          title='This should be your meta title'
          description={`You can add your meta description here`}>
          <>
            <Hero initialLoad={initialLoad} />
            <div className='w-full h-full flex justify-center items-center'>
              <h1 className='font-bold font-3xl'>Add your components here</h1>
            </div>
          </>
        </ContainerBlock>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  /**
   * Make any API Calls here
   */
};
