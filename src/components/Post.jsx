import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQHYMKfffq6NuA/profile-displayphoto-shrink_800_800/0/1658537663986?e=1666224000&v=beta&t=4nlFDE4tUFSs8zE0IrAmPMjvYKt5U9wQAQcbH6mU4LM"  />
          <div className={styles.authorInfo}>
            <strong>Jonas Benjamim</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:11h' dateTime="2022-05-11 08:11:34">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto </a>{' '}
        <a href=""> #nlw</a>{' '}
        <a href="">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}