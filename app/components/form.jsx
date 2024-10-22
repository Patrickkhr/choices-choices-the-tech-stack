import styles from './form.module.css';

const BookingForm = () => {
  return (
    <section className={styles.sectionForm}>
      <form method="post" action="/" className={styles.form}>
        <h1>Boeken</h1>
        <div className={styles.formGroup}>
          <label htmlFor="first-name">Voornaam:</label>
          <input type="text" name="first-name" id="first-name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="last-name">Achternaam:</label>
          <input type="text" name="last-name" id="last-name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Enter your email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefoonnummer:</label>
          <input type="tel" name="phone" id="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="persons">Hoeveel personen?</label>
          <input type="text" name="persons" id="persons" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="request">Aanvraag:</label>
          <textarea id="story" name="story"></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Datum:</label>
          <input type="date" name="date" id="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="time">Choose a time for your meeting:</label>
          <input
            type="time"
            name="time"
            id="time"
            min="09:00"
            max="22:00"
            defaultValue="14:30"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Verstuur</button>
        </div>
      </form>
      <article className={styles.articleForm}>
        <div className={styles.logoContainer}>
          <img src="/wogologo.webp" height="150" width="150" alt="Wogo Logo" />
        </div>
        <div className={styles.cocktailInfo}>
          <p>
            +31 0641054495
          </p>
          <p>
            info@wogoamsterdam.com
          </p>
        </div>
        <ul className={styles.socialMediaList} role="list" aria-label="Social links">
          <li>
            <a href="/">
              <img src="/wogologo.webp" height="50" width="50" alt="Wogo Logo" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/wogologo.webp" height="50" width="50" alt="Wogo Logo" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/wogologo.webp" height="50" width="50" alt="Wogo Logo" loading="lazy" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default BookingForm;
