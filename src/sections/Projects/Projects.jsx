import styles from './ProjectsStyles.module.css';
import CJ from '../../assets/theCJ.png';
import Hotel from '../../assets/hotel.jpg'
import Mini from '../../assets/CICD.png';
import scalable from '../../assets/scalable.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <div>
        <ProjectCard
          src={scalable}
          h3="Building a Scalable & Secure AWS Architecture (My DevOps Learning Journey)"

        />
        <a href='https://medium.com/@shailendera.jungrana/building-a-scalable-secure-aws-architecture-my-devops-learning-journey-8f06c02a84a2' target="_blank"><button >View</button></a>

        </div>
    
        <div>
        <ProjectCard
          src={Mini}
          h3="CI/CD Pipeline with Code Quality Analysis and Artifact Management."
          style={{ width: '200px', height: '150px' }} 
        />
        <a href='https://medium.com/@shailendera.jungrana/ci-cd-pipeline-with-code-quality-analysis-and-artifact-management-56bc53eefa29' target="_blank"><button >View</button></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
