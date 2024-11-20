import SkillCard from "../Components/layouts/SkillCard";
import { skillData } from "../myskillsdata/skillData";

const MyExpartise = () => {
  return (
    <div id="expertise" className="py-20 lg:pb-[150px] bg-white">
      

      <div className="flex justify-around">
        <div className="overflow-y-hidden max-w-[370px] ">
          <h3
            id="expertise-heading"
            className="font-Montserrat capitalize font-medium text-primary text-2xl lg:text-5xl pb-4 lg:pb-8 text-center"
          >
            My expertise
          </h3>
          <p
            id="expertise-des"
            className="font-Montserrat font-normal text-black lg:text-base text-sm opacity-70"
          >
            Frontend developer proficient in HTML, CSS, and JavaScript, with a
            strong command of frameworks like React and Next.js. I leverage
            Bootstrap and Tailwind for responsive design, and utilize tools like
            Figma and Photoshop for stunning visuals. Experienced in state
            management with Redux and Context API, and data fetching with Axios.
            Passionate about creating dynamic, user-centric experiences enhanced
            by GSAP animations.
          </p>
        </div>

        {/* all skills */}
        <div className="lg:pt-10 pt-6 max-w-[800px] gap-y-4 flex items-center gap-x-4 flex-wrap">
          {skillData?.map((item, index) => (
            <div id="skill" key={index}>
              <SkillCard key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExpartise;
