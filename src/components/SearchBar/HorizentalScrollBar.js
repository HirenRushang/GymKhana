import React, {useContext} from 'react'
import BodyPartsCategory from './BodyPartsCategory'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../../assests/icon/right-arrow.png';
import LeftArrowIcon from '../../assests/icon/left-arrow.png';
import "./SearchBar.css"


const HorizentalScrollBar = ({data}) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
          <div onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
          </div>
        );
      };
      
      const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
          <div onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
          </div>
        );
      };


  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

        {data.map((item)=> {
         return (
            <div key={item.id || item}
                //  itemId = {item.id || item}
                //  title = {item.id || item}
            >
            
            <BodyPartsCategory item={item} />

            </div>
         )
    })}
    </ScrollMenu>
  )
}

export default HorizentalScrollBar