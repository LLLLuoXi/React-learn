/*
 * @Author: luoxi
 * @LastEditTime: 2022-09-14 16:32:20
 * @LastEditors: your name
 * @Description: Pager Component
 */
import "./Pager.css"

/**
 * 
 * @param {*} currentPage 初始页码
 * @param {*} total 总数据量
 * @param {*} limit 页容量，每页显示的数据量
 * @param {*} panelNumber 数字页面最多显示几个
 * @returns
 */
export default function Pager(props) {
    // 总页数
    const pageNumber = getPageNumber(props)
    if (pageNumber === 0) {
        return null
    }
    const min = getMinNumber(props)
    const max = getMaxNumber(min, pageNumber, props)
    const numbers = []
    for (let i = min; i <= max; i++) {
        numbers.push(<span className={props.currentPage === i ? 'item active' : 'item'} key={i} onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    // console.log('pageNumber', pageNumber);
    return (
        <>
            <span
                onClick={() => { toPage(1, props) }}
                className={props.currentPage === 1 ? 'item disabled' : 'item'}>
                首页
            </span>
            <span
                onClick={() => { toPage(props.currentPage - 1 < 1 ? 1 : props.currentPage - 1, props) }}
                className={props.currentPage === 1 ? 'item disabled' : 'item'}>
                上一页
            </span>
            {numbers}
            <span
                onClick={() => { toPage(props.currentPage + 1 > pageNumber ? pageNumber : props.currentPage + 1, props) }}
                className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>
                下一页
            </span>
            <span
                onClick={() => { toPage(pageNumber, props) }}
                className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>
                尾页
            </span>

            <span className="current">{props.currentPage}</span>
            /
            <span>{pageNumber}</span>
        </>
    )
}


/**
 * 获取总页数
 * @param {*} props 
 * @returns
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}

/**
 * 获取最小页码
 * @param {*} props 
 * @returns 
 */
function getMinNumber(props) {
    let min = props.currentPage - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1
    }
    return min
}

/**
 * 获取最大页码
 * @param {*} props 
 * @returns 
 */
function getMaxNumber(min, pageNumber, props) {
    let max = min + props.panelNumber - 1
    if (max > pageNumber) {
        max = pageNumber
    }
    return max
}

/**
 * 跳转到某一页
 * @param {*} target  目标页码
 * @param {*} props 
 */
function toPage(target, props) {
    if (props.currentPage === target) {
        return
    }
    props.onPageChange && props.onPageChange(target)
}
