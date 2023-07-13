import React from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

export type PostType = { id: string; author: string; body: string };
const posts: PostType[] = [
  { id: 'p1', author: 'Alex', body: 'I like coding everyday' },
  { id: 'p2', author: 'Marina', body: 'I like watching vlogs everyday' },
  { id: 'p3', author: 'Bjorn', body: 'I like sniffing poops everyday' },
  { id: 'p4', author: 'Max', body: 'I like doing webinars everyday' },
];

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
          posts={posts}
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
