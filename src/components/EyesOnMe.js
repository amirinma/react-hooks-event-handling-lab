// Code EyesOnMe Component Here

function EyesOnMe(){
    function focusFo(){
        console.log('Good!')
    }
    function blurFo(){
        console.log('Hey! Eyes on me!')
    }
    return <button onFocus={focusFo} onBlur={blurFo}>Eyes on me</button>
}

export default EyesOnMe



