import Future from "../components/Futures";
import comment from "../assets/images/comment.png";
import browser from "../assets/images/browser.png";
import vector from "../assets/images/vector.png";
import cellphone from "../assets/images/cell-phone.png";
import eye from "../assets/images/eye-scanner 1.png";
import male_textmarker from "../assets/images/male-telemarketer.png";
import Futures from "../components/Futures";
import app from "../assets/images/App.png";

const freechat = {
  title: "Full free chat",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  img: comment,
};
const male_call = {
  title: "24/7 support by real pepole",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  img: male_textmarker,
};
const review = [
  {
    title: "unlimiter features",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: browser,
  },
  {
    title: "awsome ui design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: vector,
  },
];

const reviews = [
  {
    title: "riso & androind version",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: cellphone,
  },
  {
    title: "retina ready greaphics",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: eye,
  },
];

const AppFuture = () => {
  return (
    <div className="w-full mx-auto bg-BG_Basic px-10 sm:py-5">
      <div className="w-full">
        <h1 className="w-full text-center font-bold text-2xl text-white sm:my-5">
          AppFutures
        </h1>
        <p className="w-full text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
      </div>
      <div className="w-full mx-auto sm:w-1/3">
        <Futures
          img={freechat.img}
          text={freechat.text}
          title={freechat.title}
        />
      </div>
      <div className="w-full block sm:w-5/6 mx-auto sm:flex">
        <div className="flex flex-col gap-40">
          {review.map((freechat) => (
            <Future
              img={freechat.img}
              text={freechat.text}
              title={freechat.title}
            />
          ))}
        </div>
        <img
          className="w-full flex items-center justify-center ml-6 sm:w-1/4 sm:mx-auto sm:pl-6"
          src={app}
        />
        <div className="flex flex-col gap-40">
          {reviews.map((freechat) => (
            <Future
              img={freechat.img}
              text={freechat.text}
              title={freechat.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/3 mx-auto">
        <Futures
          img={male_call.img}
          text={male_call.text}
          title={male_call.title}
        />
      </div>
    </div>
  );
};

export default AppFuture;
