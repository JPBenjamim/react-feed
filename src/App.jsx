import { Header } from './components/Header'
import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jonas Benjamim"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita tempora doloremque inventore quos vel libero ut dolor, explicabo ab, sunt"
      />
      <Post
        author="Gabriel linn"
        content="Um novo post legal"
      />
      
    </div>
  )
}
