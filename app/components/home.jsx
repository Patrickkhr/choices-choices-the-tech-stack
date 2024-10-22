import styles from './hero.module.css';

export default function Home({ hero, }) {
  return (
    <>
    <section className={styles.sectionHome}>
			<video
					autoPlay
					loop
					muted
					width="1280"
					height="1000"
					aria-label=""
					aria-hidden="true"
					poster={hero.image.url}
				>
				</video>
				<div className={styles.overlay}></div>
				<article className={styles.heroContent}>
					<h1 className={styles.h1} key={hero.title}>
						{hero.title}
					</h1>
					<div className={styles.heroDescription}>
						<p>{hero.description}</p>
						<button className={styles.btn} type="submit">{hero.button}</button>
					</div>
				</article>
			</section>
    </>
  );
}