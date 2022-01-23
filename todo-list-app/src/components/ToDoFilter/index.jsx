/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-23 23:11:40
 * @LastEditors: your name
 * @Description:  筛选功能
 */

import React from "react";
import { Radio } from "antd";
import { STATUS } from "../../config/status";

const ToDoFilter = (props) => {
  const { filterStatus, onFilterStatus } = props;

  const handleStatusChange = (e) => {
    const value = e.target.value;
    onFilterStatus && onFilterStatus(value);
  };

  return (
    <div className="todo-filter">
      <Radio.Group value={filterStatus} onChange={handleStatusChange}>
        <Radio.Button value={`${STATUS.IS_CREATE},${STATUS.IS_DONE}`}>
          全部
        </Radio.Button>
        <Radio.Button value={`${STATUS.IS_CREATE}`}>未完成</Radio.Button>
        <Radio.Button value={`${STATUS.IS_DONE}`}>已完成</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default ToDoFilter;
