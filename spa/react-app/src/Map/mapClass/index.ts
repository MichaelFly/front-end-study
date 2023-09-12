export class SelectMap {
    private AMap: any;
    private map: any;
    private container: any;

    constructor(AMap: any, ref: any, clickFn: any) {
        this.AMap = AMap;
        this.container = ref.current;
        this.createMap(clickFn);
        this.getAddr();
        this.searchKeyword();
    }

    createMap(clickFn:any) {
        this.map = new this.AMap.Map(this.container, {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 11,
        });
        this.map.on('click', (e:any) => {
            clickFn(e);
        });
    }

    getAddr() {
        this.AMap.service('AMap.Geocoder', () => {
            const geocoder = new this.AMap.Geocoder({});
            geocoder.getAddress([102.436552, 30.317196], (status:any, result:any) => {
                if (status === 'complete' && result.info === 'OK') {
                    console.log(result);
                }
            });
        });
    }

    searchKeyword() {
        const autoComplete = new this.AMap.Autocomplete();
        autoComplete.search('步科', (status: any, result: any) => {
            console.log('result', result);
        });
    }
}
