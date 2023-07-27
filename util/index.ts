class BaseFn {
    static isResEmptyData = (data) => {
        if (data === undefined) return true;
        if (data === null) return true;
        if (data === '') return true;
        if (BaseFn.isArray(data) && data.length === 0) return true;

        return false;
    };

    static isThingPg(useage: string) {
        return useage === 'thing';
    }

    static toInt(val: any) {
        return parseInt(val || '0', 10);
    }

    static async sleep(millis: number) {
        // @ts-ignore
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, millis * 1000);
        });
    }

    static hex2rgba(hex: string, alpha = 1) {
        if (!hex) return undefined;
        const [r, g, b] = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [];
        return `rgba(${r},${g},${b},${alpha / 100})`;
    }

    static toHex(n: number) {
        return `${n > 15 ? '' : 0}${n.toString(16)}`;
    }

    static rgba2Hex(color: string) {
        // @ts-ignore
        if (color.startsWith('#')) return color;

        const arr = color.match(/(\d(\.\d+)?)+/g) || [];
        const res = arr.map((s: string) => parseInt(s, 10));
        const r = res[0];
        const g = res[1];
        const b = res[2];

        return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}`;
    }

    static getRgbaAlpha(color) {
        let alp = 1;
        const rgbaReg = /rgba\([\d ]+(?:\,([\d. ]+)){3}\)/; //eslint-disable-line
        if (rgbaReg.test(color)) {
            alp = color.replace(rgbaReg, '$1');
        }
        return alp * 100;
    }

    static isNotEmpty(array?: any[]) {
        return array && array.length !== 0;
    }

    static clone(obj: Object) {
        return obj ? JSON.parse(JSON.stringify(obj)) : obj;
    }

    static typeOfSource(v: any, sourceType: 'static' | 'super' | 'rpc' | 'pageVar' | 'all' = 'rpc') {
        const typeOfSource = v instanceof Object && !!v.source;
        if (!typeOfSource || sourceType === 'all') return typeOfSource;

        const { source } = v;
        const { type } = source;
        const sourceTypes: any[] = [sourceType];
        if (sourceType === 'rpc') sourceTypes.push('push');

        if (type) { // @ts-ignore
            return sourceTypes.includes(type);
        }

        if (!type && sourceType === 'rpc') return true;
        return false;
    }

    static typeOfArray(v: any) {
        return v instanceof Array;
    }

    static getRatio(ratio: string) {
        if (!ratio) return;
        return ratio.split('x');
    }


    static isArray(v: any) {
        if (v instanceof Array) return true;

        const json = this.requestToJson(v);
        if (json instanceof Array) return true;

        return false;
    }

    static isJsonString(str: any) {
        try {
            const toObj = JSON.parse(str); // json字符串转对象
            if (toObj && typeof toObj === 'object') {
                return true;
            }
        } catch {
            return false;
        }
        return false;
    }

    static isNotEmptyJson = (val) => {
        if (val instanceof Array) return false;
        return typeof val === 'object' && !!Object.keys(val).length;
    };

    static isNotEmptyJsonArr = (val) => {
        if (!(val instanceof Array)) return false;
        if (val.length <= 0) return false;
        return !!val.filter((item) => {
            return BaseFn.isNotEmptyJson(item);
        }).length;
    };

    static requestToJson(data: any) {
        try {
            if (typeof data === 'string') {
                data = JSON.parse(data as string);
                return BaseFn.requestToJson(data);
            }
            if (data instanceof Object || typeof data === 'boolean') {
                return data;
            }
            return data;
        } catch (error) {
            return data;
        }
    }

    static requestToStr(data: any) {
        try {
            if (!data) return data;
            if (typeof data === 'string') {
                return data;
            }
            if (data instanceof Object) {
                return JSON.stringify(data);
            }
            return `${data}`;
        } catch (error) {
            return data;
        }
    }

    static getDefRadio(typeWeb) {
        if (typeWeb === 'WEB') return ['1920', '1080'];
        return ['375', '667'];
    }

    static compareArrayEquals = (array1: any[], array2: any[]) => {
        if (!array1 || !array2) return false;

        return (
            array1.length === array2.length &&
            array1.every((v, i) => {
                return v === array2[i];
            })
        );
    };

    static isNumber = (v: any): boolean => {
        return typeof v === 'number';
    };

    static strToNumber = (v): number => {
        return this.isNumber(v) ? v.valueOf() : Number(v).valueOf();
    };

    static formatDataSource(dataSource: any) {
        if (dataSource?.source) {
            if (dataSource?.response) {
                const { data, ok } = dataSource.response;
                return ok ? data : null;
            }
            if (dataSource instanceof Object) {
                return undefined;
            }
        }

        return dataSource;
    }

    static dsToDefNumber(v: any) {
        const formatData = this.formatDataSource(v);
        // eslint-disable-next-line no-restricted-globals
        return !isNaN(Number(formatData)) ? Number(formatData) : 0;
    }

    static dsToDefStr(v: any) {
        let data = this.formatDataSource(v);
        data ??= '';
        return `${data}`;
    }

    static dsToDefBoolean(v: any) {
        const formatData = this.formatDataSource(v);
        return String(formatData) === 'true';
    }

    static dsToDefArray(v: any) {
        const data = this.formatDataSource(v);
        return data instanceof Array ? data : [];
    }

    static dsToDefObjArray(v: any) {
        const data = this.formatDataSource(v);
        const findCorrect = (val) => {
            return val.filter((item) => {
                return typeof item === 'object' && item !== null && Object.keys(item).length;
            });
        };
        return data instanceof Array && findCorrect(data).length === data.length ? data : [];
    }

    static dsToDefThingMapArray(v: any) {
        const data = this.formatDataSource(v);
        const findCorrect = (val) => {
            return val.filter((item) => {
                return (
                    typeof item === 'object' &&
                    item !== null &&
                    // @ts-ignore
                    Object.keys(item).find((itm) => itm === 'name') &&
                    // @ts-ignore
                    Object.keys(item).find((itm) => itm === 'online') &&
                    // @ts-ignore
                    Object.keys(item).find((itm) => itm === 'position')
                );
            });
        };
        return data instanceof Array && findCorrect(data).length === data.length ? data : [];
    }

    static dsToDefUndefined(v: any) {
        const data = this.formatDataSource(v);
        return data || undefined;
    }

    static getFileAddr(id: string) {
        if (!id) return undefined;
        return `/fss/buckets/dvs/files/${id}`;
    }

    static getImageUrlOrDefault = (url: string, defaultImgUrl) => {
        return url ? BaseFn.getFileAddr(url) : defaultImgUrl;
    };

    static getSvgUrlOrDefault = (url: string, defaultSvgUrl) => {
        return url ? BaseFn.getFileAddr(url) : defaultSvgUrl;
    };

    static getJsonArrKeys = (jsonArr: { [key: string]: any }[]): any => {
        if (!(jsonArr instanceof Array)) return [];
        return jsonArr.reduce((acc, cur) => {
            const allKeys = Object.keys(cur);
            allKeys.forEach((key) => {
                if (!acc.includes(key)) {
                    acc.push(key);
                }
            });
            return acc;
        }, []);
    };

    static getJsonArrNumKeys = (jsonArr: { [key: string]: any }[]): any => {
        if (!(jsonArr instanceof Array)) return [];
        return jsonArr.reduce((acc, cur) => {
            const allKeys = Object.keys(cur);
            allKeys.forEach((key) => {
                if (
                    !acc.includes(key) &&
                    parseFloat(cur[key]).toString() !== 'NaN' &&
                    Number(cur[key]).toString() !== 'NaN'
                ) {
                    acc.push(key);
                }
            });
            return acc;
        }, []);
    };

    static getJsonArrStrKeys = (jsonArr: { [key: string]: any }[]): any => {
        if (!(jsonArr instanceof Array)) return [];
        return jsonArr.reduce((acc, cur) => {
            const allKeys = Object.keys(cur);
            allKeys.forEach((key) => {
                if (
                    !acc.includes(key) &&
                    typeof cur[key] === 'string' &&
                    Number(cur[key]).toString() === 'NaN' &&
                    cur[key].trim() !== ''
                ) {
                    acc.push(key);
                }
            });
            return acc;
        }, []);
    };

    static renderTransformRotateMirr = (horiRotate = false, vertRotate = false) => {
        let val = '';
        if (horiRotate) {
            val += 'rotateY(180deg) ';
        } else {
            val += 'rotateY(0deg) ';
        }
        if (vertRotate) {
            val += 'rotateX(180deg)';
        } else {
            val += 'rotateX(0deg)';
        }
        return { transform: val };
    };

    // 数组数据根据key进行聚合（ex：[{day:1,cost:1},{day:1,cost:2}...] => [{day:1,cost:[1,2],...}]）
    static formatChartArr = (data: any[], key: string): { [key: string]: any }[] => {
        // 获取非key之外的所有属性名称
        const keys = BaseFn.getJsonArrKeys(data).filter((itm) => itm !== key);
        // 初始化聚合数组数据
        // @ts-ignore
        const initData = Object.values(
            data.reduce((acc, cur) => {
                if (acc[cur[key]]) {
                    keys.forEach((itm) => {
                        acc[cur[key]][itm].push(cur[itm]);
                    });
                } else {
                    const itemData = {
                        [key]: cur[key]
                    };
                    keys.forEach((itm) => {
                        itemData[itm] = [cur[itm]];
                    });
                    acc[cur[key]] = itemData;
                }
                return acc;
            }, {})
        );
        // 聚合数据各属性的最大长度
        const keyForLen = keys.reduce((acc, cur) => {
            let maxLen = 0;
            initData.forEach((itm) => {
                maxLen = itm[cur].length > maxLen ? itm[cur].length : maxLen;
            });
            acc[cur] = maxLen;
            return acc;
        }, {});
        // 根据属性最大长度补齐聚合数据
        return (
            initData.map((item) => {
                keys.forEach((itm) => {
                    const needFillNum = keyForLen[itm] - (item[itm].length || 0);
                    if (needFillNum > 0) {
                        item[itm] = [...item[itm], ...[...new Array(needFillNum)].map(() => null)];
                    }
                });
                return item;
            }) || []
        );
    };

    static renderChartSeries = (
        dsData: any[],
        formatData: any[],
        customYData: any[],
        xData: any[],
        xKey: string,
        itemOption: { [key: string]: any },
        colorConfig: { key: unknown; color: string }[] = [],
        condition: any = []
    ) => {
        const seriesData = [];
        const { type } = itemOption;
        const isLine = type === 'line';
        const formatCustomYDataFn = (yData) => {
            if (!yData) return [];
            return yData.reduce((prev, cur) => {
                if (cur.setType === 'uni') {
                    [...new Array(cur.num)].forEach((_, idx) => {
                        const item = { idx, ...cur };
                        delete item.num;
                        prev.push(item);
                    });
                }
                if (cur.setType === 'unUni') {
                    cur.details.forEach((detail) => {
                        prev.push(detail);
                    });
                }
                return prev;
            }, []);
        };
        const formatCustomYData = formatCustomYDataFn(customYData);
        formatCustomYData?.forEach((item) => {
            if (!item.show) return;
            if (item.type === 'select') {
                // @ts-ignore
                const selectKeys = [...new Set(formatData.map((itm) => itm[item.reName][item.idx]))].filter(
                    (keyItm) => keyItm !== null
                );
                selectKeys.forEach((itm) => {
                    let lineColor = null;
                    const itemData = xData.map((xItem) => {
                        // @ts-ignore
                        const findData = dsData.find(
                            (dsItm) => dsItm[xKey] === xItem && dsItm[item.reName] === itm
                        );
                        const conditionColor = BaseFn.getConditionColor(findData, item.oriName, condition);
                        lineColor = lineColor || conditionColor;
                        return conditionColor
                            ? {
                                value: findData?.[item.oriName],
                                itemStyle: { color: conditionColor },
                                label: { show: true, color: conditionColor }
                            }
                            : findData?.[item.oriName];
                    });
                    // @ts-ignore
                    const color = colorConfig?.find((colorItem) => colorItem.key === `${itm}${item.addAfter}`)?.color ||
                        'auto';
                    seriesData.push({
                        name: `${itm}${item.addAfter}`,
                        data: itemData,
                        itemStyle: {
                            color: isLine && lineColor ? lineColor : color
                        },
                        ...itemOption
                    });
                });
            } else {
                let lineColor = null;
                const itemData = xData.map((xItem) => {
                    const findData = dsData.filter((fData) => fData[xKey] === xItem);
                    const conditionColor = BaseFn.getConditionColor(
                        findData[item.idx],
                        item.oriName,
                        condition
                    );
                    lineColor = lineColor || conditionColor;
                    return conditionColor
                        ? {
                            value: findData?.[item.idx]?.[item.oriName],
                            itemStyle: { color: conditionColor },
                            label: { show: true, color: conditionColor }
                        }
                        : findData?.[item.idx]?.[item.oriName];
                });
                // @ts-ignore
                const color = colorConfig?.find((colorItem) => colorItem.key === `${item.reName}${item.addAfter}`)
                        ?.color || 'auto';
                seriesData.push({
                    name: `${item.reName}${item.addAfter}`,
                    data: itemData,
                    itemStyle: {
                        color: isLine && lineColor ? lineColor : color
                    },
                    ...itemOption
                });
            }
        });
        return seriesData;
    };

    static isPubDs(ds) {
        if (!BaseFn.typeOfSource(ds)) return false;
        const { source } = ds;
        return source?.isPublish;
    }

    // tempData:formatData的一条样例数据（exam:{day:1,yield:[1,2],power:[3,4]}）
    // yKeys:选择的y轴属性（exam:['yield','power']）
    // 返回 [
    //        {"setType": 'uni',"oriName": "yield","reName": "yield","type": "input","show": true,"addAfter":"","num":2},
    //        {
    //          "setType": 'unUni',"oriName": "power",
    //            "details":[{"idx":0,"oriName": "yield","reName": "yield","type": "input","show": true,"addAfter":"",},...]
    //          },
    //      ]
    static formatCustomYData = (
        tempData: { [key: string]: any },
        yKeys: string[]
    ): { [key: string]: any }[] => {
        if (!tempData) return [];
        return yKeys.reduce((acc, cur) => {
            const curLen = tempData[cur].length;
            acc.push({
                setType: 'uni',
                oriName: cur,
                reName: cur,
                type: 'input',
                show: true,
                addAfter: '',
                num: curLen
            });
            return acc;
        }, []);
    };

    static compareArrays = (listA, listB) => {
        if (!listA || !listB) return;

        const result =
            listA.length === listB.length &&
            listA.every((a) => listB.some((b) => a === b)) &&
            listB.every((_b) => listA.some((_a) => _a === _b));

        return result;
    };

    static compareDataSample = (oldDataSample, newDataSample) => {
        const oldDsp = oldDataSample ?? undefined;
        const newDsp = newDataSample ?? undefined;

        if (oldDsp === undefined || newDsp === undefined) return false;

        if (newDsp instanceof Array) {
            if (!(oldDsp instanceof Array) || oldDsp.length === 0) return false;

            if (newDsp instanceof Array && newDsp.length === 0) return false;

            const newColumns = Object.keys(newDsp[0]);
            const oldColumns = Object.keys(oldDsp[0]);

            return BaseFn.compareArrays(newColumns, oldColumns);
        }

        if (typeof newDsp === 'string') {
            return newDsp === `${oldDsp}`;
        }

        if (newDsp instanceof Object) {
            if (!(oldDsp instanceof Object)) return false;

            const newColumns = Object.keys(newDsp);
            const oldColumns = Object.keys(oldDsp);

            return BaseFn.compareArrays(newColumns, oldColumns);
        }

        if (typeof newDsp === 'number') {
            return newDsp === Number(oldDsp);
        }

        if (typeof newDsp === 'boolean') {
            return newDsp === Boolean(oldDsp);
        }
    };

    static getConditionColor = (rowData, targetKey, condition) => {
        if (!condition || !rowData) return null;
        let conditionColor = null;
        // 区别是否可以同时设置背景色和文字颜色
        const formatColor = (type, prev, targetColor) => {
            return type ? { ...(prev || {}), [type]: targetColor } : targetColor;
        };
        condition.forEach((item: any) => {
            const { key, type, val, target, color, targetMultiple, targetType } = item;
            const isEqual = targetMultiple ? target.includes(targetKey) : targetKey === target;
            if (!isEqual) return;
            const left = rowData[key];
            const right = val[0];
            const rightGreater = val[1];
            const calcLeft = Number(left);
            const calcRight = Number(right);
            const calcRightGreater = Number(rightGreater);
            switch (type) {
                case 'between':
                    if (calcLeft < calcRightGreater && calcLeft > calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'less':
                    if (calcLeft < calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'greater':
                    if (calcLeft > calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'lessEqual':
                    if (calcLeft <= calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'greaterEqual':
                    if (calcLeft >= calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'equal':
                    if (calcLeft === calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'notEqual':
                    if (calcLeft !== calcRight) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'include':
                    if (right !== '' && left.includes(right)) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'notInclude':
                    if (right !== '' && !left.includes(right)) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'startWith':
                    if (right !== '' && left.startsWith(right)) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                case 'endWith':
                    if (right !== '' && left.endsWith(right)) {
                        conditionColor = formatColor(targetType, conditionColor, color);
                    }
                    break;
                default:
                    break;
            }
        });
        return conditionColor;
    };
}

export default BaseFn;
