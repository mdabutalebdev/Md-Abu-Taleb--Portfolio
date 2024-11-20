import bd from "../assets/icons/bd.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 lg:py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-y-7 justify-between">
        <div className="inline-block">
              <div className="text-white leading-5 lg:leading-7 font-Montserrat capitalize font-semibold text-xl lg:text-2xl py-4 px-3">
                Md Abu <br />
                Taleb Khan.
              </div>
            </div>
          <ul>
            <li className="font-Montserrat font-bold text-white capitalize text-base pb-5">
              Contact
            </li>

            <li className="text-white pb-2 hover:text-primary opacity-90 text-base font-normal font-Montserrat">
              <a href="mailto:mdabutaleb.dev@gmail.com" target="_blank">
                mdabutaleb.dev@gmail.com
              </a>
            </li>
            <li className="flex items-center hover:text-primary text-white transition pb-2 duration-150 opacity-90 text-base font-normal font-Montserrat">
              <img src={bd} alt="" />
              <a href="tel:+8901622243011" target="_blank">
                +8901622243011
              </a>
            </li>
            <li className="text-white opacity-90 text-base font-normal font-Montserrat">
              Dhaka,Bangladesh
            </li>
          </ul>
          <ul>
            <li className="font-Montserrat font-bold text-white text-base capitalize pb-5">
              Social
            </li>
            <li className="text-base font-Montserrat font-normal text-white opacity-90 capitalize pb-2 hover:text-primary">
              <a href="https://www.facebook.com/mdabutalebdev" target="_blank">
                Facebook
              </a>
            </li>
            <li className="text-base font-Montserrat font-normal text-white opacity-90 capitalize pb-2 hover:text-primary">
              <a href="https://x.com/mdabutalebdev" target="_blank">
                Twitter
              </a>
            </li>
            <li className="text-base font-Montserrat font-normal text-white opacity-90 capitalize pb-2 hover:text-primary">
              <a
                href="https://www.linkedin.com/in/mdabutalebdev/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="text-base font-Montserrat font-normal text-white opacity-90 capitalize pb-2 hover:text-primary">
              <a href="https://github.com/mdabutalebdev" target="_blank">
                github
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-Montserrat font-bold text-base text-white capitalize pb-2">
              <a href="#" target="_blank">
                fiverr
              </a>
            </li>
            <li className="font-Montserrat font-bold text-base text-white capitalize">
              <a href="#" target="_blank">
                upwork
              </a>
            </li>
          </ul>
           
        </div>
        <div className="w-[1400px] border-t border-gray-700 mx-auto mt-8">
        <p className="text-sm font-Montserrat   font-normal text-white opacity-60 pt-0 lg:pt-5 text-center">
         
          © 2024 md abu taleb khan. All rights reserved.
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default Footer;
