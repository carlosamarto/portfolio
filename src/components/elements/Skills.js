import { FaCaretRight } from "react-icons/fa";

const Skills = ({ text }) => {
  return (
    <li className='about__container-row_skills-item'>
      <FaCaretRight className='about__container-row_skills-item_icon' />
      <strong className='about__container-row_skills-item_text'>{text}</strong>
    </li>
  );
};

export { Skills };
