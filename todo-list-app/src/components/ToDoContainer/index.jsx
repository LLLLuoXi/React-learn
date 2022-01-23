/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-23 23:16:48
 * @LastEditors: your name
 * @Description:
 */

import React from "react";
import { List } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { STATUS } from "../../config/status";
const ToDoContainer = (props) => {
  const { todos = [], onOperate, filterStatus } = props;
  
  console.log("todos", todos);
  const handleOperate = (operate, item) => {
    console.log(operate, item);
    switch (operate) {
      case "is-delete":
        onOperate &&
          onOperate({
            ...item,
            status: STATUS.IS_DELETE,
          });
        break;
      case "is-done":
        onOperate({
          ...item,
          status:
            item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE,
        });
        break;
      default:
        break;
    }
  };

  const showTodos = todos.filter((todo) => {
    return (
      todo.status != STATUS.IS_DELETE &&
      filterStatus.indexOf(todo.status.toString()) > -1
    );
  });

  return (
    <div className="todo-container">
      <List
        bordered
        dataSource={showTodos}
        renderItem={(todo) => (
          <List.Item
            className={
              todo.status === STATUS.IS_DONE
                ? "todo-container-list-done"
                : "todo-container-list"
            }
          >
            {todo.content}
            <div className="todo-item-operate">
              <CloseCircleOutlined
                onClick={() => handleOperate("is-delete", todo)} // //  这个语法确保了 `this` 绑定在  handleOperate 中
              />
              <CheckCircleOutlined
                onClick={() => handleOperate("is-done", todo)}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ToDoContainer;
