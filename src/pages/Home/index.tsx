
import H1 from "../../atom/Typography/H1";
import "./HomeStyle.scss";
import Landingpage from "../../Layout/Landingpage";
import Button from "../../atom/Button";
import FirstAnimi from "../../atom/Vectors/FirstAnimi";
import H2 from "../../atom/Typography/H2";
import SecondAnimi from "../../atom/Vectors/SecondAnimi";
import ThirdAnimi from "../../atom/Vectors/ThirdAnimis";
import ForthAnimi from "../../atom/Vectors/ForthAnimi";
import data, { Asset as asset, Investors } from "../../data";
import Asset from "../../atom/Asset/Asset";
import Sliders from "../../molecules/Slider/Slider";

import Footer from "../../molecules/Footer";
import JoinInvestors from "../../molecules/JoinInvestors";
console.log(Investors)




const Home = () => {

  return (
    <Landingpage>
      <div className="flex flex-col relative">
        <section className=" w-[95%] mx-auto md:w-[95%] lg:w-[80%] md:m-auto h-full overflow-auto">
          <div className="  lg:mx-8">
            <div className=" flex flex-col space-y-[4rem] justify-center items-center md:flex md:justify-between md:flex-row lg:justify-between lg:flex-row w-full my-14">
              <div className="flex flex-col space-y-[1.5rem] h-fit ">
                <div className="md:max-w-[450px] lg:max-w-[450px] max-w-[500px]">
                  <H1 color="#2f98a0">                    
                    Dollar investments that help you
                    <span className="grow">grow</span>
                  </H1>
                </div>
                <p className=" max-w-[500px] text-center md:max-w-[500px] lg:max-w-[500px]">
                  We put your money in high quality assets that help you build
                  wealth and achieve your financial goals.
                </p>
                <div className="flex lg:justify-start md:justify-start justify-center gap-x-[1.5rem]">
                  <div className="w-[160px]">
                    <Button
                      title="Download on the"
                      subtitle="Play Store"
                      prefixIcon={<img src="/Public/Vectors/apple-fill.svg" />}
                      customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                      href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                    />
                  </div>
                  <div className="w-[auto]">
                    <Button
                      title="Download on the "
                      subtitle="Apple Store"
                      prefixIcon={
                        <img src="/Public/Vectors/google-play-fill.svg" />
                      }
                      customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                      href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-max">
                <img
                  src="/Public/Images/riseAppPhone.png"
                  alt=""
                  className="w-[16.01716rem] h-[30.0375rem] drop-shadow-[0_1.60087px_16.0089px_rgba(53,71,87,0.15)] md:text-left riseVestApp"
                />
              </div>
            </div>
         <div className="animated-area absolute top-0 w-[100%] lg:h-[11%] md:h-[11%] h-[16%]">
              <div className="animated-box">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </div>
         </div>
          </div>
        </section>

        <div className="grid py-10 place-items-center">
          <div className="flex items-center justify-center space-x-8">
            <img
              src="/Public/Images/ARM.png"
              alt=""
              width="115px"
              height="59"
              className="w-[65px] h-[30px] md:w-[115px] md:h-[59px] lg:w-[115px] lg:h-[59px]"
            />
            <img
              src="/Public/Images/westernUnion.png"
              width="240px"
              height="120px"
              alt=""
              className="w-[65px] h-[30px] md:w-[220px] md:h-[70px] lg:w-[240px] lg:h-[70px]"
            />
            <img
              src="/Public/Images/techStars.png"
              width="180"
              height="90"
              alt=""
              className="w-[65px] h-[30px] md:w-[180px] md:h-[90px] lg:w-[115px] lg:h-[56px]"
            />
            <img src="/Public/Images/vest.png" alt="" width="70" height="50" 
             className="w-[65px] h-[30px] md:w-[70px] md:h-[50px] lg:w-[70px] lg:h-[50px]"
            />
          </div>
        </div>

        <section className="lg:max-w-[80%] lg:mx-auto md:max-w-[95%] md:mx-auto grid grid-col repeat(4,1fr) space-y-[1.5rem]">
          <div className="space-y-[1.5rem]">
            <div className="grid  lg:mx-8 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr] grid-cols-[1fr] mt-12">
           <div className="order-2 lg:order-1 md:order-1 w-full grid place-items-center ">
           <div className="w-full flex flex-col justify-center">
                <div className=" max-w-[450px]">
                  <H2 color="#2d2d2d">Invest your money in dollars</H2>
                  <p className="max-w-[320px] text-[#2d2d2d]">
                    By holding your investments in a stable currency, your money
                    grows more over time and retains its value better.
                  </p>
                  <a
                    href=""
                    className="relative flex items-center mt-5  max-w-fit group"
                  >
                    <span className="text-[#0898A0]">Start Investing Now</span>
                    <svg
                      width=".8125em"
                      height=".625em"
                      viewBox="0 0 13 10"
                      fill="none"
                      className="duration-300 ease-out translate-x-2 opacity-0 group-hover:opacity-100 group-hover:traslate-x-0"
                    >
                      <path
                        d="M.5 5a.5.5 0 01.5-.5h9.975L7.155.862a.5.5 0 01.69-.724l4.362 4.155a1 1 0 01-.009 1.423L7.845 9.862a.5.5 0 01-.69-.724L10.991 5.5H1A.5.5 0 01.5 5z"
                        fill="#0898A0"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
           </div>
              
             <div className="order-1 flex justify-center lg:max-w-[100%] md:max-w-[100%] lg:order-2 md:order-2">
             <FirstAnimi className="object-center" />
             </div>
            
            </div>
            <div className="grid mx-8 grid-cols-[1fr,1fr] ">
              <SecondAnimi />
              <div className="flex flex-col justify-center">
                <div className="lg:max-w-[450px] md:max-w-[450px] ">
                  <H2 color="#2d2d2d">Invest your money in dollars</H2>
                  <p className="max-w-[320px] text-[#2d2d2d]">
                    By holding your investments in a stable currency, your money
                    grows more over time and retains its value better.
                  </p>
                  <a
                    href=""
                    className="relative flex items-center mt-5 space-x-3 group"
                  >
                    <span className="text-[#0898A0]">Start Investing Now</span>
                    <svg
                      width=".8125em"
                      height=".625em"
                      viewBox="0 0 13 10"
                      fill="none"
                      className="duration-300 ease-out translate-x-2 opacity-0 group-hover:opacity-100 group-hover:traslate-x-0"
                    >
                      <path
                        d="M.5 5a.5.5 0 01.5-.5h9.975L7.155.862a.5.5 0 01.69-.724l4.362 4.155a1 1 0 01-.009 1.423L7.845 9.862a.5.5 0 01-.69-.724L10.991 5.5H1A.5.5 0 01.5 5z"
                        fill="#0898A0"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid mx-8  grid-cols-[1fr,1fr] ">
              <div className="flex flex-col justify-center">
                <div className="max-w-[450px]">
                  <H2 color="#2d2d2d">Invest your money in dollars</H2>
                  <p className="max-w-[320px] text-[#2d2d2d]">
                    By holding your investments in a stable currency, your money
                    grows more over time and retains its value better.
                  </p>
                  <a href="" className="relative flex items-center mt-5 group">
                    <span className="text-[#0898A0]">Start Investing Now</span>
                    <svg
                      width=".8125em"
                      height=".625em"
                      viewBox="0 0 13 10"
                      fill="none"
                      className=" duration-300 ease-out translate-x-2 opacity-0 group-hover:opacity-100 group-hover:traslate-x-0"
                    >
                      <path
                        d="M.5 5a.5.5 0 01.5-.5h9.975L7.155.862a.5.5 0 01.69-.724l4.362 4.155a1 1 0 01-.009 1.423L7.845 9.862a.5.5 0 01-.69-.724L10.991 5.5H1A.5.5 0 01.5 5z"
                        fill="#0898A0"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <ThirdAnimi />
            </div>
            <div className="grid mx-8  grid-cols-[1fr,1fr] ">
              <ForthAnimi />
              <div className="flex flex-col justify-center">
                <div className="max-w-[450px]">
                  <H2 color="#2d2d2d">Invest your money in dollars</H2>
                  <p className="max-w-[320px] text-[#2d2d2d]">
                    By holding your investments in a stable currency, your money
                    grows more over time and retains its value better.
                  </p>
                  <a
                    href=""
                    className="relative flex items-center mt-5 space-x-3 group"
                  >
                    <span className="text-[#0898A0]">Start Investing Now</span>
                    <svg
                      width=".8125em"
                      height=".625em"
                      viewBox="0 0 13 10"
                      fill="none"
                      className=" duration-300 ease-out translate-x-2 opacity-0 group-hover:opacity-100 group-hover:traslate-x-0"
                    >
                      <path
                        d="M.5 5a.5.5 0 01.5-.5h9.975L7.155.862a.5.5 0 01.69-.724l4.362 4.155a1 1 0 01-.009 1.423L7.845 9.862a.5.5 0 01-.69-.724L10.991 5.5H1A.5.5 0 01.5 5z"
                        fill="#0898A0"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" container">
          <div className="space-y-4 py-10">
            <div className="flex justify-center">
            <H1
              style={{
                textAlign: "center",
                marginLeft: "2rem",
                marginRight: "2rem",
              }}
            >
              Asset Classes
            </H1>
            </div>
            <p className=" text-center text-lg font-medium mx-8">
              It’s your money, choose where you invest it
            </p>
          </div>
          <section className="grid grid-cols-[repeat(3,1fr)] mx-8 gap-8">
            {asset.map(
              (
                { img, title, subtext, history, riskLevel, learn, bgColor },
                index
              ) => (
                <Asset
                  key={index}
                  bg_color={bgColor}
                  img={img}
                  title={title}
                  subtext={subtext}
                  risklevel={riskLevel}
                  history={history}
                  learnMore={learn}
                />
              )
            )}
          </section>
        </div>
        <div className="container">
          <div className=" flex justify-between gap-[3rem] items-center py-20">
            <img
              src="/Public/Images/buildwelth.png"
              alt=""
              className="w-[24rem] h-[33rem] ml-8"
            />
            <div className=" mr-8 space-y-[15px] ">
              <p className="text-sm">The Rise App</p>
              <h3 className="text-4xl font-semibold">
                Save for your <span className="text-[#856dc5]">future</span>
              </h3>
              <p className="max-w-[380px]">
                With Rise, you achieve your financial goals faster. Save for
                school, your home, vacations, your children’s future and more.
                Start Saving
              </p>
              <div className="w-[160px] pt-6">
                <Button
                  title="Start Saving"
                  customClass="py-3 px-7 text-white bg-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="display flex justify-between mt-[2rem]">
            <div className="w-1/4 flex flex-col">
              <div className="h-[287px] blur-[40px] bg-[#fff4f0]"  style={{mixBlendMode:'multiply'}}>jjj</div>
              <div className="h-[287px] blur-[40px] bg-[#f6e4f0]" style={{mixBlendMode:'multiply'}}>uujj</div>
            </div>
            <div className="self-center  space-y-[1rem]">
              <h2 className="text-[2rem] font-semibold text-center">How we are Regulated</h2>
              <p className="text-center max-w-[460px]">The Nigerian SEC regulates Rise's Nigerian investments through a trusteeship agreement with ARM Trustees, who oversees investments on behalf of the users. All assets are held in regulated third parties in the relevant jurisdictions.</p>
            </div>
            <div className="w-1/4 flex-col">
            <div className="h-[287px] blur-[40px] bg-[#f6f4ff]"  style={{mixBlendMode:'multiply'}}>jjj</div>
              <div className="h-[287px] blur-[40px] bg-[#ecfefe]" style={{mixBlendMode:'multiply'}}>uujj</div>
            </div>
        </div>
      </div>
      
      <section className="py-16 flex  flex-col justify-center items-center gap-8">
       <div className="">
       <H1 color="#0898a0" style={{textAlign:'center'}}>From The People Who Use Rise</H1>
        <p className="text-center max-w-[490px] self-center mx-auto ">Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
       </div>
       <div className="max-w-[95%]">       
          <Sliders>        
        {Investors.map(({reviews, name, img, attr})=>{
           return <div className="card-wrapper">
                 <div className="flex flex-col justify-between flex-grow h-[17rem] p-4">
                 <p className="text-[15px] leading-7 text-[16px]">{reviews}</p>
                  <div className="card-img flex items-center gap-x-[1rem]">
                      <img src={img} alt="" className="object-contain w-12 h-12 rounded-full" />
                      <div>
                        <p>{name}</p>
                        <p>{attr}</p>
                      </div>
                  </div>
                 </div>
           </div>
         })}      
          </Sliders>
       </div>
      </section>
      <section className="container ">
         <div className=" flex items-center justify-between">
          <div className="ml-8 space-y-[1.5rem]"> 
            <h2 className="text-4xl font-semibold">Join The Rise Community</h2>
            <p className="max-w-[500px]">If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>

            <div className="w-[14rem] pt-4">
              <Button title="Join our community"  customClass="bg-[#a0dde2] py-5 px-7 font-bold text-base"/>
                
            </div>
          </div>
         
         <div className="w-[45%]">
         <img src="/Public/Images/joinedImg.png" alt="" className="object object-cover"/>
         </div>         
         </div>           
      </section>
      <section className="container">
      <JoinInvestors/>
      </section>
         <Footer/>
                         
    </Landingpage>
  );
};

export default Home;
