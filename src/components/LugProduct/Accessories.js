import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './Accessories.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Accessories extends Component {
    
  constructor(){
    super();
    this.state={
      isMouseOver: true,
      heartOver: false,
      product: "",
      colors: ""
     
    }
  }

  handleMouseOver = () => {
    this.setState({
      isMouseOver: false,
      
    })
  }


  handleMouseOut = () =>{
    this.setState({
      isMouseOver: true,
     
    })
    
  }

  // handleColorImage = (idx) => {
  //   this.setState({
  //     index: idx
  //   },() => {

  //     if(this.state.index === 0) {
  //       this.setState({
  //         colors: this.props.color[0].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index === 1) {
  //       this.setState({
  //         colors: this.props.color[1].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index ===2){
  //       this.setState({
  //         colors: this.props.color[2].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index ===3){
  //       this.setState({
  //         colors: this.props.secondImg,
  //         isMouseOver: false
  //       })
  //     }
  //   })
  // }



    render() { 
     
      const { img } = this.props;
        return ( 
            <li className="CabinLimited">
                    <div className="LimitedThumb">
                        <div className="LimitedBody">
                            <a href=" "className="ProductLink">
                                <div className="ProductImage">
                                <img src={this.state.isMouseOver ? img.product_img1 : img.product_img2}
                                  className="LimitedImage" 
                                  onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}
                                  alt=""/>
                                </div>
                                <div className="ProductCat">{this.props.collection}</div>
                                <div className="ProductRyme">{this.props.name}</div>
                            </a>
                            <div className="ProductPrice">
                              <span >{this.props.price} €</span>
                            </div>
                            <div className="ProductPromo"></div>
                        </div>
                        <div className="LimitedWish">
                            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart}/> }
                            
                        </div>
                       
                    </div>  
                </li>
         );
    }
}
 
export default withRouter(Accessories);