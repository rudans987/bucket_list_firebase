
const root = document.getElementById("root")

function MinutesToHours() {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const reset = () =>setAmount(0);
    // 바로 아래 두개는 같은 함수이다.
    // const onFlip = () => setFlipped(!flipped);
    const onFlip = () => {
        reset();
        setFlipped((current) => !current)};
    return (
        <div>
           {/* htmlfor는 input박스와 연결하는 것이다. */}
            
            <div>
            <label htmlfor="minutes">Minutes</label>  
            <input 
            value={flipped ?amount*60 :amount} 
            id="minutes" 
            placeholder="Minutes" 
            type="number"
            onChange={onChange}
            disabled={flipped === true} 
            />
            </div>
            <div>
                <label htmlfor="hours">Hours</label>
                <input  
                // 분을 가져와서 60으로 나눠 hour단위로 표시한다.
                value={flipped ? amount : Math.round(amount/60)}
                id="hours" 
                placeholder="Hours" 
                type="number"
                onChange={onChange}
                disabled={flipped === false} 
                /> 
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>
                {flipped? "Turn back" :"Invert" }
            </button>
        </div>
    )
}
function KmToMiles() {
    return <h3>KM 2 M</h3>;
}
function App() {
    const [index, setIndex] = React.useState("xx");
    const onSelect = (event) => {
        // select의 옵션안의 value값을 가져와 index값을바꾼다. (event.target.value)로
        setIndex(event.target.value)
    }
    return (
        <div>
            <h1>Super Converter</h1>
            {/* 분할 정복 : 함수를 가져와 붙여넣는것 */}
            {/* <MinutesToHours /> */}
            
            {/* 선택지를 고르면 onSelect함수에 들어가 거기서 index값이 바뀌고  */}
            {/* state에 저장된 index값을 가져온다. */}
            <select value={index} onChange={onSelect}>
                <option value="xx">select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">KM & Miles</option>
            </select>
            {/* index값에 따라 만들어놓은 함수컴포넌트를 불러온다 */}
            {index ==="xx" ? "Please select your units":null}
            {index ==="0" ? <MinutesToHours/>:null}
            {index ==="1" ? <KmToMiles/>:null}
        </div>
    );
};

ReactDOM.render(<App/>,root)