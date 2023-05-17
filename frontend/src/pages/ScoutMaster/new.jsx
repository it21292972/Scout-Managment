import React from "react"
 
class displayTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

        this.callAPI = this.callAPI.blind(this)
        this.callAPI();
    }

    callAPI(){

        fetch("").then(
            (response) => response.json()

        ).then((data) => {

            console.log(data)
            this.setState({
                list:data.data
            })
        })

    }
    render() {
        return(
            <div>


            </div>
        )
    }
}