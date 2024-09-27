import styles from './HeroStyles.module.css';
import heroImg from '../../assets/shailendra.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv1.pdf';
import { useTheme } from '../../common/ThemeContext';
import Behance from '../../assets/Behance.png'
import Instagram from '../../assets/instagram.png'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
         Shailendra
          <br />
          Jung Rana
        </h1>
        <h2>Frontend Developer 
          <br />
          UI/UX Designer
        </h2>
        <span>
          <a href="https://github.com/ShailendraJungRana" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.behance.net/arunjungrana" target="_blank">
            <img src={Behance} alt="Behance icon" />
          </a>
          <a href="https://www.instagram.com/arun.jr_111/" target="_blank">
            <img src={Instagram} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
        A passionate frontend developer and UI/UX designer focused on developing  web apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
