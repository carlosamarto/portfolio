import { Card } from "../elements/Card";
import { TitleLine } from "../elements/TitleLine";

const Projects = () => {
  return (
    <>
      <section id='projects' className='section projects'>
        <TitleLine number='03.' text='Projects' />

        <div className='projects__container'>
          <Card
            link='https://dominiquepanczuch.com/'
            github={false}
            title='Dominique'
            description='Dominique Portfolio Website in WordPress with a Custom Template.'
            codes={["WordPress", "JavaScript", "PHP"]}
          />

          <Card
            link='https://oshica.com.ve/'
            github={false}
            title='Oshica'
            description='Oshica Website in WordPress with Elementor.'
            codes={["WordPress", "Elementor", "CSS"]}
          />

          <Card
            link='http://www.s2ctech.com/'
            github={false}
            title='S2CTech'
            description='S2CTech Website in WordPress with Elementor.'
            codes={["WordPress", "Elementor", "CSS"]}
          />
        </div>
      </section>
    </>
  );
};

export { Projects };
