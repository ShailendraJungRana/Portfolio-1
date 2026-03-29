import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

const skillCategories = [
  {
    label: 'CI/CD',
    skills: ['Jenkins, Github Actions'],
  },
  {
    label: 'Infrastructure as Code (IaC)',
    skills: ['Terraform, Ansible'],
  },
  {
    label: 'Containerization & Orchestration',
    skills: ['Docker and K8s'],
  },
  {
    label: 'Monitoring & Logging',
    skills: ['Prometheus and Grafana'],
  },
  {
    label: 'Others',
    skills: ['AWS, Github, Linux'],
  },
];

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What I work with</span>
        <h1 className={styles.title}>Skills</h1>
      </div>

      <div className={styles.grid}>
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.label}
            className={styles.category}
            style={{ '--cat-index': catIdx }}
          >
            <p className={styles.categoryLabel}>{category.label}</p>
            <ul className={styles.chipList}>
              {category.skills.map((skill, skillIdx) => (
                <li
                  key={skill}
                  className={styles.chip}
                  style={{ '--skill-index': skillIdx + catIdx * 4 }}
                >
                  <span className={styles.chipInner}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.marqueeTrack} aria-hidden="true">
        <div className={styles.marqueeContent}>
          {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map(
            (skill, i) => (
              <span key={i} className={styles.marqueeItem}>
                {skill} <span className={styles.marqueeDiv}>✦</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
