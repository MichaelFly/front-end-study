import React, {useEffect} from 'react';
import './App.css';
import Content from './Content';

function App() {
    //数据大屏自适应函数
    const handleScreenAuto = () => {
        const designDraftWidth = 1920;//设计稿的宽度
        const designDraftHeight = 1080;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }
    // @ts-ignore
    useEffect(() => {
        handleScreenAuto();
        window.onresize = () => handleScreenAuto();
        return () => window.onresize = null;
    }, [])

    return (
        <div className="screen-root">
            <div className="screen" id="screen">
                <Content />
            </div>
        </div>
    );
}

export default App;
