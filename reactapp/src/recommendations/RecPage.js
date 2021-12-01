import SoftwareCard from "./SoftwareCard.js";
import SearchBar from "./SearchBar.js";

import quickbooks from "../techAssets/quickbooks.png";
import square from "../techAssets/square.png";
import "./RecPage.css";
import Navbar from "../Navbar/Navbar.js";

function MainPage(props) {
  return (
    <div><Navbar />
    <div className = "container">
      <div className="selectionSide">
      <SearchBar/>
        
      </div>

      <div className="cardsSide">
        <SoftwareCard
          techName="QuickBooks"
          techCategory="Accounting"
          logo={quickbooks}
        />
        <SoftwareCard
          techName="Square"
          techCategory="Payment"
          logo={square}
        />
      </div>
    </div>
    </div>
  );
}

export default MainPage;