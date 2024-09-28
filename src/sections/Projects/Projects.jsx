import styles from './ProjectsStyles.module.css';
import CJ from '../../assets/theCJ.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import Learning from '../../assets/Learning.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <div className='hover'>
        <ProjectCard
          src={CJ}
          h3="The Coding Journey"
          p="Learning Web-App(Landing page)"
        />
        <a href='https://e-learning-using-framer-motion.vercel.app/' target="_blank"><button >View</button></a>
        <a href='https://github.com/ShailendraJungRana/E-learning-using--Framer-motion' target="_blank"><button >Code</button></a>

        </div>
        <div>
        <ProjectCard
          src={Learning}
          
          h3="Learning"
          p="Learning-platform"
        />
        <a href='https://ecommerce-web-snowy-beta.vercel.app/' target="_blank"><button >View</button></a>
        <a href='https://github.com/ShailendraJungRana/Ecommerce-Web' target="_blank"><button >Code</button></a>
        </div>
        <div>
        <ProjectCard
          src={hipsster}
          h3="Hipsster"
          p="Glasses Shop"
        />
        <a href='https://ecommerce-web-snowy-beta.vercel.app/' target="_blank"><button >View</button></a>
        <a href='https://github.com/ShailendraJungRana/Ecommerce-Web' target="_blank"><button >Code</button></a>
        </div>
        <div>
        <ProjectCard
          src={fitLift}
          h3="FitLift"
          p="Fitness App"
        />
         <a href='https://ecommerce-web-snowy-beta.vercel.app/' target="_blank"><button >View</button></a>
        <a href='https://github.com/ShailendraJungRana/Ecommerce-Web' target="_blank"><button >Code</button></a>
        </div>v
      </div>
    </section>
  );
}

export default Projects;
