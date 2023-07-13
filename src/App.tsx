import React from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

const App: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  return (
    <React.Fragment>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
