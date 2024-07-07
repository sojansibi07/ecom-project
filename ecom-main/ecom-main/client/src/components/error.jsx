import './ErrorStyle.css';
function Error(){
    return(
        <div className='BodyError'>
            <title>Error 404</title>
            <div>
            <h2 style={{marginTop: '400px',marginLeft: '75px', fontFamily: 'monospace',fontSize:'72px',paddingTop: '5px',paddingLeft: '5px'}}>Site Under Construction :(</h2>
    </div>
    <div style={{width: '100%',justifyContent: 'center',display: 'flex',alignItems: 'center',paddingTop: '100px'}}>
        <a href="/"><button id="cmb">Back To HomePage</button></a>
    </div>
        </div>
    )
}

export default Error;