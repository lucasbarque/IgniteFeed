import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasbarque.png',
      name: 'Lucas Barque',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-11 08:13:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lucasbarque.png',
      name: 'Alexandre Ximenez',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-03-10 08:13:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
