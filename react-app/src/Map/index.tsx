import AMapLoader from '@amap/amap-jsapi-loader';
import { useRequest } from 'ahooks';
import { useRef } from 'react';
import {SelectMap} from "./mapClass";

const initAmap = (ref: any, clickFn: any) => {
    return new Promise((resolve, reject) => {
        AMapLoader.load({
            key: '9b36f157139556950060dac9bc2b9e0d',
            version: '1.4.15',
            plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.MarkerClusterer', 'AMap.Autocomplete'],
        })
            .then((AMap) => setTimeout(() => resolve(new SelectMap(AMap, ref, clickFn))))
            .catch(reject);
    });
};

export default function (){
    const mapRef = useRef();

    const clickFn = (e:any) => {
        console.log('clickFn', e);
    };

    const { loading } = useRequest(initAmap, { defaultParams: [mapRef, clickFn] });
    return (
        <div ref={mapRef as any} style={{width:'500px',height:'500px'}}/>
    )
}
