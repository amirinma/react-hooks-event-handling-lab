// Code Keypad Component Here
function Keypad(){
    function eventHandler(){
        console.log('Entering password...')
    }

    return <div>
        <input type="password" onChange={eventHandler}></input>
    </div>
}

export default Keypad
