import "./SoftwareCard.css";
import ReactStars from "react-rating-stars-component";

function SoftwareCard(props) {
  const { techName, techCategory, logo } = props;
  return (
    <div className="Card">
      <div className="Card-icon">
        <img className="Card-image" src={logo} />
      </div>
      <div className="Card-info">
        <div className="Card-info-title">
          <div>
            <text className="technology-category">
              {techCategory}
            </text>
          </div>
          <div>
            <text className="technology-name">{techName}</text>
          </div>
        </div>
        <div className="Card-info-rating">
          <ReactStars
            count={5}
            size={18}
            edit={false}
            value={4.5}
            isHalf={true}
            activeColor="#5AC705"
          />
          <text>(121)</text>
        </div>
      </div>
    </div>
  );
}

export default SoftwareCard;
