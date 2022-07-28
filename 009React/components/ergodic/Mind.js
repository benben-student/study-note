import React from "react";
class Mind extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                'A','B','C'
            ]
        }
    }
    render(){
        const {list}=this.state
        return(
            <div>
                {list.map((item,index)=>{
                    return <li className="span" key={index}>{item}</li>
                })}
            </div>
        )
    }
}
export default Mind