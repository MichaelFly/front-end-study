// @ts-ignore
import domtoimage from 'dom-to-image';

const DomToImg = ()=>{

    const onCapture = () => {
        domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
            .then(function (dataUrl:any) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return <div>
        <div id="my-node" style={{height:'200px',background:'aqua'}}>123123</div>
        <button onClick={onCapture}>capture</button>
    </div>
}

export default DomToImg;
