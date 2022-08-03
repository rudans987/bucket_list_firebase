import BucketList from "./BucketList";

function Btn ({banana, big}) {
    return <button style={{
        backgroundColor: "tomato",
        color:"white",
        fontSize: big ? 18: 16,
        // props의 banana 키의 value를 가져온다.
    }}>{banana}</button>;
}


function App () {
    return (
        <div>
            <Btn banana="Save" big={true} />
            <Btn banana="contunue" big={false} />
        </div>
    )
}