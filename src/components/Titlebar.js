import "./titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function TitleBar() {
  return (
    <>
      <div className="titlebar_top">
           <div className="titlebar_top_col1">
                    <div className="titlebar_bagSquare">
                    <GiBeachBag className="titlebar_bagIcon" />
                    </div>
              <div className="titlebar_bagIcon_Products" > Products</div>
              <div className="titlebar_bagIcon_Active" >Active</div>
              <div className="titlebar_bagIcon_Draft"> Draft</div>
              <div className="titlebar_bagIcon_Assembly">Assembly</div> 
           </div>
        <div className="titlebar_top_col2">
            
            <div className="titlebar_top_col22">
                <BsFillPlusCircleFill className="titlebar_plusIcon" />
                <label>Add Product</label>
            </div>
        </div>
      </div>
    </>
  );
}
