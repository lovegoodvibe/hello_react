import React, {Component} from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
class Demo extends Component {
  render() {
      let a = 5;
      const m={ status:false};
      let users;
      users = [
          {
              id: 5,
              name: "A",
              age: "5",
              status:false
          },
          {
              id:6,
              name: "B",
              age: "6",
              status: true
          }
      ];
      const elements=users.map((user,) => {
          let result="";
          if(user.status){
              result= <Body key={user.id}
                           name= {user.name}
                           age={user.age}
              >
              </Body>
          }
          return result;
      });
      return (
          <div>
              <Header></Header>
              <Body
                  name = "nguyen van a"
                  age = "12"
              >nong dan</Body>
              <Body
                  name = "nguyen van b"
                  age = "27"
              >giao vien</Body>
             <p>{a} <br/>
                 status : {m.status ? "Active" : "Pending"}<br/>
             </p>
              {elements}
          </div>

      );
  }
}
export default Demo;

