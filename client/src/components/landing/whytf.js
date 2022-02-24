import "./whytf.scss";
import search from "../../images/search.png";
export default function whytf(prop) {
  return (
    <div className="block">
      <img src={prop.pic} width="60" height="60"></img>
      <div className="center">
        <p>{prop.text}</p>
      </div>
    </div>
  );
}
