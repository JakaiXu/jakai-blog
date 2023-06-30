import Card from "./UI/Card";
import { Button as FooterButton } from "./UI/Button";
import { useNavigate } from "react-router-dom";
import RightArrow from "./UI/RightArrow";
import Profile from "./Profile";
import FooterTable from "./FooterTable";
type ShowProfile = {
  showProfile: boolean;
};
const Footer = ({ showProfile }: ShowProfile) => {
  const navigate = useNavigate();
  return (
    <Card>
      <div>
        {showProfile && (
          <div className="text-white sm:text-6xl py-10">Have a Good Project ?</div>
        )}
        {showProfile && (
          <div className="mb-10 justify-center font-bold">
            <FooterButton
              fontSize="20px"
              color="white"
              border="none"
              radius="30px"
              backgroundColor="Orange"
              backgroundImage="linear-gradient(to bottom, rgba(255,145,100,0),rgba(250,95,30,1))"
              width="200px"
              height="50px"
              onClick={() => navigate("contact")}
            >
              Contct Me
              <RightArrow />
            </FooterButton>
          </div>
        )}
        {showProfile && <hr className="bg-gray-800 border-gray-800" />}
        <section className="flex flex-col">
          <div className="flex justify-between ">
            <div className="w-[20%] mt-[6%] ml-[6%]">
              {showProfile && <Profile />}
              {showProfile && (
                <h3 className="text-white relative ">
                  Web Developer Based in Sydney
                </h3>
              )}
            </div>
            {showProfile ? (
              <div className=" pt-[8%] pr-[5%]">
                <FooterTable />
              </div>
            ) : (
              <div className="pt-[5%] w-[100%]">
                <FooterTable />
              </div>
            )}
          </div>
          <div className="border-t border-gray-800 pt-5 mt-20">
            <h3 className="text-white pb-5 text-gray-500">
              2023 | Jakai Xu | AU{" "}
            </h3>
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Footer;
