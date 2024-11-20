const SkillCard = ({ item }) => {
    const { name, icon } = item;
    return (
      <div className="inline-block">
        <div className="h-32 w-32 bg-gray-300 gap-x-2 text-center   items-center text-black py-2 px-3 lg:px-4 text-sm lg:text-base rounded-md font-Montserrat font-normal capitalize hover:border-2 hover:border-primary">
          <picture className="w-4">
            <img src={icon} alt={icon} className="h-10 w-10 mx-auto mt-8" />
          </picture>
          <span>{name}</span>
        </div>
      </div>
    );
  };
  
  export default SkillCard;