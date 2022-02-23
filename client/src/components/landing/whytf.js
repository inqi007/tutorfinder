import "./whytf.scss";
import search from "../../images/search.png";
export default function whytf() {
  return (
    <div className="block">
      <img src={search} width="60" height="60"></img>
      <div className="center">
        <p>Choose an experienced tutor that fits your budget</p>
      </div>
    </div>
  );
}
