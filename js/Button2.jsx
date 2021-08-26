// 'use strict';
import DoctorCard from "./components/DoctorCard";

class Button2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if(this.state.liked) {
            return 'You liked this...';
        }

        return (
            // <button onClick={ () => this.setState({liked: true})}>Like</button>
            <DoctorCard name={"Dr.Cox"}/>
        )
    }
}

let domContainer2 = document.querySelector('#jsx_button');
ReactDOM.render(<Button2/>, domContainer2);