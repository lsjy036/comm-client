let picArr=[
    'https://img.alicdn.com/bao/uploaded/i2/6000000007707/O1CN01KEhRsK26nrEcxvcYF_!!6000000007707-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i2/6000000004126/O1CN0124m3MP1gLkv05JXmc_!!6000000004126-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i3/6000000002289/O1CN01UByxOM1SmPL8f6VCo_!!6000000002289-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i1/6000000002352/O1CN0102WLeN1TFGIi8q9F0_!!6000000002352-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i1/6000000000586/O1CN01CNBNC41GCQqgt45kF_!!6000000000586-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i4/6000000004629/O1CN01TAIHf41k488txyS3U_!!6000000004629-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i3/6000000004391/O1CN01vTUyNQ1iJ7sTp8Y0s_!!6000000004391-0-picassoopen.jpg_160x160.jpg',
    'https://img.alicdn.com/bao/uploaded/i1/6000000002937/O1CN01X6Shv41XZByiGCC2Y_!!6000000002937-0-picassoopen.jpg_160x160.jpg',
]
let commodityData=[
    {
        id:1,
        name:'德国德亚全脂纯牛奶整箱200ml*30盒儿童高钙早餐奶',
        price:99.9,
        saleVolume:2991,
    },
    {
        id:2,
        name:'德国德亚脱脂纯牛奶整箱200ml*30盒健身0脂肪',
        price:99.9,
        saleVolume:2001,
    },
    {
        id:3,
        name:'新西兰纽仕兰3.5g蛋白质全脂纯牛奶250ml*24盒营养早餐奶',
        price:83.9,
        saleVolume:91,
    },
    {
        id:4,
        name:'澳洲德运纯牛奶全脂儿童宝宝牛奶学生牛奶1L*10盒早餐奶',
        price:119,
        saleVolume:223561,
    },
    {
        id:5,
        name:'德国德亚全脂纯牛奶营养早餐奶学生儿童老人1L*12盒囤货',
        price:149,
        saleVolume:1037,
    },
    {
        id:6,
        name:'Anchor安佳全脂牛奶装新西兰草饲奶源进口早餐奶1L×12盒',
        price:89,
        saleVolume:122991,
    },
    {
        id:7,
        name:'安佳成人脱脂纯牛奶 新西兰草饲奶源牛奶整箱250ml*24盒',
        price:99.9,
        saleVolume:2991,
    },
    {
        id:8,
        name:'新西兰纽仕兰3.5g蛋白质低脂纯牛奶250ml*24盒早餐奶',
        price:89.9,
        saleVolume:3991,
    },
]
export function showCommodity(){
    return {
        picArr:picArr,
        commodityData:commodityData,
    }
}