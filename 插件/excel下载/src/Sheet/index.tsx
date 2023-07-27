import { utils, writeFile } from 'xlsx';


export default function (){
    const download = () => {
        console.log('download')
        // 1. 创建一个工作簿 workbook
        const workBook = utils.book_new()
        // 2. 创建工作表 worksheet
        const workSheet = utils.json_to_sheet([
            {
                id: 1, name: '张三', age: 16
            },
            {
                id: 2, name: '李四', age: 18
            },
            {
                id: 3, name: '王五', age: 20
            }
        ])
        // 3. 将工作表放入工作簿中
       utils.book_append_sheet(workBook, workSheet)
        // 4. 生成数据保存
        writeFile(workBook, `测试.xlsx`, {
            bookType: 'xlsx'
        })
    }
    return (
        <div>
            <button onClick={download}>下载excel</button>
        </div>
    )
}
