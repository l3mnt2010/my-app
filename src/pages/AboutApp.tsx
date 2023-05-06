import android from "../assets/images/android-smartphone-free-mockup 1.png";
import About from "../components/About";

const AboutApp: React.FC<any> = () => {
  const review = [
    {
      title: "Creative design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Easy to use",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Best user experince",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="relative top-6 w-5/6 mx-10 my-16 shadow-2xl sm:w-5/6 sm:mx-auto">
      <div className="w-full block sm:w-2/3 sm:flex sm:gap-32">
        <div className="w-full flex flex-col gap-5 sm:pl-32 sm:pt-10 ">
          <h1 className="mx-auto text-xl font-bold sm:text-2xl">
            About Our App
          </h1>
          <p className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </p>
          <img className="sm:mx-auto sm:w-full sm:h-1/2" src={android} />
        </div>
        <div className="w-full sm:w-full">
          {review.map((itm) => {
            let text = itm.text;
            let title = itm.title;
            return <About title={title} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
