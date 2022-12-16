import Card from "../../Components/Card/Card";
import Hero from "../../Components/Hero/Hero";
import classes from "./LandingPage.module.css";
import StatMeter from "../../Components/StatMeter/StatMeter";
import SlideShow from "./Components/SlideShow";
import StatCounter from "../../Components/StatCounter/StatCounter";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Typed from "react-typed";
import Section2 from "./Section/Section2";
import TextAnimation from "./Components/TextAnimation";
import EaseInComponent from "./Components/EaseInComponent/EaseInComponent";
import SuppliersSection from "./Section/SuppliersSection";

const LandingPage = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    console.log("inView " + inView);
  }, [inView]);
  const images = [
    {
      img: "https://i.pinimg.com/originals/62/bc/10/62bc103ac8f6f468b84f238b4055176f.jpg",
      text: "Sali Eng abides by the law and the regulations of the retail solutions industry governing body.",
    },

    {
      img: "https://img.freepik.com/premium-photo/interior-men-s-clothing-store-style-fashion_120897-3074.jpg?w=2000",
      text: "Sali Eng maintains general client confidentiality and their information and products.",
    },
    {
      img: "https://media.istockphoto.com/photos/modern-black-luxury-walk-in-closet-dressing-room-wardrobe-picture-id1189147102?k=20&m=1189147102&s=612x612&w=0&h=Dl6LuB1Uuj_0czAKFFTSHN-G1xRJVBvFmeGaHWBtL3o=",
      text: "Sali Eng was founded on June 22, 2022 by a team of talented retail solutions engineeres who work around the clock to deliver state of the art products to their customers",
    },
  ];

  return (
    <>
      <div className={classes.LandingPage}>
        <Hero />
        <Section2 />
        <div className={classes.parallex_section}>
          <div className={classes.parallex_innerWrapper}>
            <h1 className={classes.parallex_header}>
              Sali Eng Muti-level manufacturing
            </h1>

            <h3 className={classes.secondary_header}>
              <Typed
                strings={[
                  "Home Equipment",
                  "Retail Equipment",
                  "Storage Equipment",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h3>

            <EaseInComponent
              type={"paragraph"}
              text={
                "Est tempora consequatur ut harum quam ut consequuntur nemo? Ea quia exercitationem ut deserunt voluptatum et rerum necessitatibus a sint Quis nam accusantium iste 33 nihil nulla. Qui quidem illum ea earum repudiandae in ullam voluptatem. Ea voluptatem labore ab earum delectus et commodi maxime 33 labore cupiditate quo corrupti tempora cum perspiciatis deserunt ut magnam galisum!"
              }
            />

            <EaseInComponent type={"button"} text={"See Our Projects"} />
          </div>
        </div>
        <div className={classes.section_3}>
          <div className={classes.innerWraper}>
            <div className={classes.header_wrapper}>
              <div className={classes.section_details}>
                <h2>On point and driven engineering team</h2>
                <p>
                  With magnitude of experience and an ongoing desire for
                  providing quality retail solutions throughout South Africa.
                  The Sali engineering and design teams are on hand to build out
                  your ideas
                </p>
              </div>
              <div className={classes.stats_wrapper} ref={ref}>
                <StatCounter target={200} stat={"Clients"} inView={inView} />
                <StatCounter target={5} stat={"Sites"} inView={inView} />
                <StatCounter
                  target={367}
                  stat={"Completed 2022 projects"}
                  inView={inView}
                />
              </div>
            </div>
            <div className={classes.section_content} ref={ref}>
              <div className={classes.service_stats}>
                <StatMeter
                  name={"CUSTOMER SUPPORT"}
                  percentage={80}
                  inView={inView}
                />
                <StatMeter
                  name={"COMMUNICATION"}
                  percentage={71}
                  inView={inView}
                />
                <StatMeter
                  name={"FAST PRODUCT DELIVERY"}
                  percentage={60}
                  inView={inView}
                />
              </div>

              <div className={classes.slide_show}>
                <SlideShow images={images} />
              </div>
            </div>
          </div>
        </div>
        <SuppliersSection />
        <div className={classes.contact_section}>
          <div
            className={[classes.innerWraper, classes.contact_grid].join(" ")}
          >
            <div className={classes.contact_sectionText}>
              {/* <h1 className={classes.contact_sectionText_header}> */}
              <TextAnimation
                text={"Looking after the details and the planet"}
              />
              {/* </h1> */}
              <p className={classes.innerText}>
                Lorem ipsum dolor sit amet. Sed quia necessitatibus et quidem
                quod cum sunt quasi aut consectetur incidunt est quae
                accusantium est maiores harum. Aut accusantium iusto et quaerat
                corporis id voluptate fugit. Est debitis sunt quo eius corrupti

              </p>
            </div>
            <div className={classes.form_wrapper}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
