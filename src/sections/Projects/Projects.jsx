import styles from './ProjectsStyles.module.css';
import CJ from '../../assets/theCJ.png';
import Hotel from '../../assets/hotel.jpg'
import Mini from '../../assets/mini.jpg';
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
          src={Hotel}

          h3="Hotel Site"
          p="Using API(landing page)"
        />
        <a href='https://hotel-site-gray.vercel.app/' target="_blank"><button >View</button></a>
        <a href='https://github.com/ShailendraJungRana/Hotel-Site' target="_blank"><button >Code</button></a>
        </div>
        <div>
        <ProjectCard
          src={Mini}
          h3="Mini Projects"
          p="5 Mini Projects"
          style={{ width: '200px', height: '150px' }} 
        />
        <a href='https://github.com/ShailendraJungRana/5-mini-project' target="_blank"><button >Code</button></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
