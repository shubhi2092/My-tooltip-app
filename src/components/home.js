import React, { useRef, useState } from "react"
import './home.scss'
const Home = () => {
    return <div className="home">
        <div className="form">
            <TooltipForm />
        </div>
    </div>
}
const TooltipForm = () => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [tooltipText, settoolTipText] = useState('');
    const [size, setSize] = useState('');
    const [padding, setPadding] = useState('');
    const [color, setColor] = useState('');
    const [bgColor, setBg] = useState('');
    const [borderRadius, setBorderRadius] = useState('');
    const [toolTipWidth, setTWidth] = useState('');
    const [arrowWidth, setAWidth] = useState('');
    const [arrowHeight, setAHeight] = useState('');

    const handleOptionChange = (event) => {
        setSelectedButton(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data here
        // You can access the form data with the state variables above
    };

    const buttons = [useRef(), useRef(), useRef(), useRef(), useRef()]

    return (
        <>
            <form>
                <label>
                    Target Element
                    <select value={selectedButton} onChange={handleOptionChange}>
                        <option value={0}>Button 1</option>
                        <option value={1}>Button 2</option>
                        <option value={2}>Button 3</option>
                        <option value={3}>Button 4</option>
                        <option value={4}>Button 5</option>
                    </select>
                </label>

                <br />

                <label>
                    Tooltip text
                    <input type="text" value={tooltipText}
                        onChange={(e) => {
                            settoolTipText(e.target.value)
                            buttons[selectedButton].current.innerHTML = e.target.value
                        }}
                    />
                </label>

                <br />

                <label>
                    Text Size
                    <input type="number" value={size}
                        onChange={(e) => {
                            setSize(e.target.value)
                            buttons[selectedButton].current.style.fontSize = e.target.value + "px"
                        }}
                    />
                </label>

                <br />

                <label>
                    Padding
                    <input type="number" value={padding} onChange={(e) => {
                        setPadding(e.target.value)
                        buttons[selectedButton].current.style.padding = e.target.value + "px"
                    }} />
                </label>

                <br />

                <label>
                    Text Color
                    <input type="text" value={color} onChange={(e) => {
                        setColor(e.target.value)
                        buttons[selectedButton].current.style.color = e.target.value
                    }} />
                </label>

                <br />

                <label>
                    Background color
                    <input type="text" value={bgColor} onChange={(e) => {
                        setBg(e.target.value)
                        buttons[selectedButton].current.style.backgroundColor = e.target.value
                    }} />
                </label>

                <br />

                <label>
                    Corner radius
                    <input type="number" value={borderRadius} onChange={(e) => {
                        setBorderRadius(e.target.value)
                        buttons[selectedButton].current.style.borderRadius = e.target.value + "px"
                    }} />
                </label>

                <br />

                <label>
                    Tooltip width
                    <input type="number" value={toolTipWidth} onChange={(e) => {
                        setTWidth(e.target.value)
                        buttons[selectedButton].current.style.width = e.target.value + "px"
                    }} />
                </label>

                <br />

                <label>
                    Arrow width
                    <input type="number" value={arrowWidth} onChange={(e) => {
                        setAWidth(e.target.value)
                        const element = document.querySelectorAll('.tooltiptext')[selectedButton]
                        console.log(element)
                        element.style.setProperty('--borderWidthAfter', e.target.value + "px")

                    }} />
                </label>

                <br />

                <label>
                    Arrow height
                    <input type="number" value={arrowHeight} onChange={(e) => {
                        setAHeight(e.target.value)
                        const element = document.querySelectorAll('.tooltiptext')[selectedButton]
                        element.style.setProperty('--borderHeightAfter', e.target.value + "px")
                    }} />
                </label>

                <br />
            </form>
            <div className="renderer">
                <button className="tooltip" onMouseEnter={(e) => {
                    e.currentTarget.classList.add('tooltip-hover')
                }}>Button 1
                    <span className="tooltiptext" ref={buttons[0]}>Tooltip text</span>
                </button>
                <button className="tooltip"
                >Button 2
                    <span className="tooltiptext" ref={buttons[1]}>Tooltip text</span>
                </button>
                <button className="tooltip"
                >Button 3
                    <span className="tooltiptext" ref={buttons[2]}>Tooltip text</span>
                </button>
                <button className="tooltip"
                >Button 4
                    <span className="tooltiptext" ref={buttons[3]}>Tooltip text</span>
                </button>
                <button className="tooltip"
                >Button 5
                    <span className="tooltiptext" ref={buttons[4]}>Tooltip text</span>
                </button>
            </div>
        </>
    );
};

export default Home;
