import Card from "../../Components/Card/Card";
import Hero from "../../Components/Hero/Hero";
import classes from "./LandingPage.module.css";
import desk from "../../Assets/Images/desk.jpeg";
import storage from "../../Assets/Images/storage.jpeg";
import kitchen from "../../Assets/Images/Kitchen.jpeg";
import StatMeter from "../../Components/StatMeter/StatMeter";
import SlideShow from "./Components/SlideShow";
import StatCounter from "../../Components/StatCounter/StatCounter";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Typed from "react-typed";

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
        <div className={classes.section_2}>
          <div className={classes.innerWraper}>
            <div className={classes.header_wrapper}>
              <h1 className={classes.primary_header}>Our Services</h1>
              <div className={classes.section_details}>
                <p>
                  We believe in serving you by providing affordable, smart and
                  exective class retail solutions with the help of our
                  well-trained engineers
                </p>
              </div>
            </div>
            <div className={classes.grid_wrapper}>
              <Card
                image={desk}
                header={"Office Equipment"}
                details={"Get State Of The Art Office Equipment At Low Prices"}
              />
              <Card
                image={storage}
                header={"Retail Garmet Wardrobes"}
                details={"We Build Industrial Retail Wardrobe."}
              />
              <Card
                image={kitchen}
                header={"Large Kitchen Cupboards"}
                details={"We Also Build State Of The A Kitchen Equipment"}
              />
            </div>
          </div>
        </div>
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
            <p className={classes.parrallex_text}>
              Est tempora consequatur ut harum quam ut consequuntur nemo? Ea
              quia exercitationem ut deserunt voluptatum et rerum necessitatibus
              a sint Quis nam accusantium iste 33 nihil nulla. Qui quidem illum
              ea earum repudiandae in ullam voluptatem. Ea voluptatem labore ab
              earum delectus et commodi maxime 33 labore cupiditate quo corrupti
              tempora cum perspiciatis deserunt ut magnam galisum!
            </p>
            <button className={classes.view_projects_btn}>
              See Our Projects
            </button>
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
        <div className={classes.contact_section}>
          <div
            className={[classes.innerWraper, classes.contact_grid].join(" ")}
          >
            <div className={classes.contact_sectionText}>
              <h1 className={classes.contact_sectionText_header}>
                Looking after the details and the planet
              </h1>
              <p className={classes.innerText}>
                Lorem ipsum dolor sit amet. Sed quia necessitatibus et quidem
                quod cum sunt quasi aut consectetur incidunt est quae
                accusantium est maiores harum. Aut accusantium iusto et quaerat
                corporis id voluptate fugit. Est debitis sunt quo eius corrupti
                qui autem quia!
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
