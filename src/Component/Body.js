import React, {Component} from "react";
class Body extends Component {
    render() {
        return (
            <div>
                <div>
                    <img alt="Iphone 6" src ="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone-12-Mini-Whi-1.jpg"/>
                </div>'
                <div>
                    <p>{this.props.name}<br/>
                        {this.props.age} tuoi<br/>
                        Nghe nghiep: {this.props.children}</p>
                </div>
            </div>

        );
    }
}
export default Body;
