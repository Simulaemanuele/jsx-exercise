import ReactDOM from "react-dom";




const root = document.querySelector('#root');

const sum = (x, y) => {
    return <h2> { x + y } </h2>
}

ReactDOM.render(sum(8,7), root);

