import { useNavigate } from "react-router-dom";
interface Blog {
  img: string;
  title: string;
  text: string;
}

const BlogPost: React.FC<Blog> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full my-10 shadow flex flex-col gap-5">
      <img className="w-full h-auto rounded-lg" src={props.img} />
      <h1 className="w-full font-bold text-left text-xl sm:text-center pl-1">
        {props.title}
      </h1>
      <p className="w-full text-left sm:text-center pl-1">{props.text}</p>

      <a
        className="w-full text-left sm:text-center text-xl underline text-cyan-600 pl-1"
        onClick={() => {
          navigate("/blog/light");
        }}
      >
        READ MORE
      </a>
    </div>
  );
};

export default BlogPost;
