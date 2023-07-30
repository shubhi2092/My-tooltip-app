import React, { useRef, useState } from "react"
import './home.css'
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
        <div className="screen">
        <div className="tooltipform">
            <form>
               <div>
                <label className="cascader">
                    <div className="heading1">Target Element</div>
                    <select className="inp1"value={selectedButton} onChange={handleOptionChange}>
                        <option  value={0}>Button 1</option>
                        <option  value={1}>Button 2</option>
                        <option value={2}>Button 3</option>
                        <option  value={3}>Button 4</option>
                        <option value={4}>Button 5</option>
                    </select>
                </label>
                </div>
                <br />
                <div className="tooltiptext">
                <label>
                    <div className="heading1">Tooltip text</div>
                    <input className="inp1" type="text" value={tooltipText}
                        onChange={(e) => {
                            settoolTipText(e.target.value)
                            buttons[selectedButton].current.innerHTML = e.target.value
                        }}
                    />
                </label>
                </div>
                <br />
               <div className="club1">
                <label>
                    <div className="heading1">Text Size </div>
                    <input className="inp2" type="number" value={size}
                        onChange={(e) => {
                            setSize(e.target.value)
                            buttons[selectedButton].current.style.fontSize = e.target.value + "px"
                        }}
                    />
                </label>
                <div>
                <label>
                <div className="heading2">Padding </div>
                    <input className="inp2" type="number" value={padding} onChange={(e) => {
                        setPadding(e.target.value)
                        buttons[selectedButton].current.style.padding = e.target.value + "px"
                    }} />
                </label>
                </div>
                </div>

                <br />

                <label>
                    <div  className="heading1">Text Color</div>
                    <input className="inp1"type="text" value={color} onChange={(e) => {
                        setColor(e.target.value)
                        buttons[selectedButton].current.style.color = e.target.value
                    }} />
                </label>

                <br />
                <br />

                <label>
                    <div className="heading1">Background color</div>
                    <input className="inp1" type="text" value={bgColor} onChange={(e) => {
                        setBg(e.target.value)
                        buttons[selectedButton].current.style.backgroundColor = e.target.value
                    }} />
                </label>

                <br />
                <br />
                <div className="club1">
                <label>
                    <div className="heading1">Corner radius</div>
                    <input className="inp2" type="number" value={borderRadius} onChange={(e) => {
                        setBorderRadius(e.target.value)
                        buttons[selectedButton].current.style.borderRadius = e.target.value + "px"
                    }} />
                </label>

                <label>
                    <div class="heading2">Tooltip width</div>
                    <input className="inp2" type="number" value={toolTipWidth} onChange={(e) => {
                        setTWidth(e.target.value)
                        buttons[selectedButton].current.style.width = e.target.value + "px"
                    }} />
                </label>
                </div>
                <br />
              <div class="club1">
                <label>
                    <div class="heading1">Arrow width</div>
                    <input className="inp2" type="number" value={arrowWidth} onChange={(e) => {
                        setAWidth(e.target.value)
                        const element = document.querySelectorAll('.tooltiptext')[selectedButton]
                        console.log(element)
                        element.style.setProperty('--borderWidthAfter', e.target.value + "px")

                    }} />
                </label>

                <label>
                    <div class="heading2">Arrow height</div>
                    <input className="inp2" type="number" value={arrowHeight} onChange={(e) => {
                        setAHeight(e.target.value)
                        const element = document.querySelectorAll('.tooltiptext')[selectedButton]
                        element.style.setProperty('--borderHeightAfter', e.target.value + "px")
                    }} />
                </label>
                </div>
                <br />
            </form>
            </div>
            <div className="renderer">
                <div className="mobilescreen">
                <button id="topleft" className="tooltip">Button 1
                    <span  className="tooltiptext" ref={buttons[0]}>Tooltip text</span>
                </button>
                <button id="topright" className="tooltip"
                >Button 2
                    <span   className="tooltiptext" ref={buttons[1]}>Tooltip text</span>
                </button>
                <button  id="middle" className="tooltip"
                >Button 3
                    <span  className="tooltiptext" ref={buttons[2]}>Tooltip text</span>
                </button>
                <button id="bottomleft" className="tooltip"
                >Button 4
                    <span  className="tooltiptext" ref={buttons[3]}>Tooltip text</span>
                </button>
                <button id="bottomright" className="tooltip"
                >Button 5
                    <span  className="tooltiptext" ref={buttons[4]}>Tooltip text</span>
                </button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Home;
