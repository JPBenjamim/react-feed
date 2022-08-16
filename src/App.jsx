import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import { Sidebar } from './components/Siderbar'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Jonas Benjamim"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita tempora doloremque inventore quos vel libero ut dolor, explicabo ab, sunt"
      />
      <Post
        author="Gabriel linn"
        content="Um novo post legal"
      />
        </main>

      </div>
      
    </div>
  )
}
