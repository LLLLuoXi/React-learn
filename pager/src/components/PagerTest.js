/*
 * @Author: luoxi
 * @LastEditTime: 2022-09-14 16:27:25
 * @LastEditors: your name
 * @Description: 
 */

import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerTest extends Component {
    state = {
        currentPage: 3,
        total: 100,
        limit: 9,
        panelNumber: 5
    }

    handlePageChange = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    render() {
        return (
            <Pager {...this.state} onPageChange={this.handlePageChange} />
        )
    }
}