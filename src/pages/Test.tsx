import { connect } from "react-redux"; //higher order component
import Connect from "./Connect";
const Test = () => {
  return (
    <div className="p-20">
      <div>this is test for redux </div>
    </div>
  );
};

export default connect(Test)(Connect);
