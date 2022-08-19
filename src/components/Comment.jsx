import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQHYMKfffq6NuA/profile-displayphoto-shrink_800_800/0/1658537663986?e=1666224000&v=beta&t=4nlFDE4tUFSs8zE0IrAmPMjvYKt5U9wQAQcbH6mU4LM" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jonas Benjamim</strong>
              <time title="11 de Maio às 08:11h" dateTime="2022-05-11 08:11:34">
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p> Muito bom Benjamim, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
