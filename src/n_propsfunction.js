// Btn props를 사용하고 싶으면 무조건 function()안에 넣고 그걸 리턴안에 써야한다.
// fontsize뒤에는 디폴트 값
function Btn ({banana, apple, fontSize=16}) {
    return (
        
            <button
            onClick={apple}
            style={{
            backgroundColor: "tomato",
            color:"white",
            fontSize,
        // props의 banana 키의 value를 가져온다.
            }}>{banana}</button>; 
    )  
       
}
// 각 prop에 들어갈 데이터타입을 정하고 다른 데이터타입이 들어오면 에러가 뜬다.
Btn.propTypes = {
    apole: PropTypes.string, 
    fontSize : PropTypes.number
}
// 리렌더링 할때 continue쪽은 렌더링되지 않게 하는법, 바뀌는 부분만 리렌더링
const MemorizedBtn = React.memo(Btn)
function App () {
    const [value, setValue] = React.useState("Save");
    const changeValue = () => setValue("Revert Changes")
    return (
        <div>
            {/* 아래에서 changeValue props이지 이벤트리스너가 아니다 */}
            {/* 버튼 함수에 속성을 부여하는거라서, 버튼 태그안에 onClick하는게 이벤트 리스너이다. */}
            <MemorizedBtn banana={value} apple={changeValue} fontSize={18} />
            <MemorizedBtn banana="contunue" />
        </div>
    )
}