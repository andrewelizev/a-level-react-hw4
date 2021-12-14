import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import TableToDos from "../TableToDos/TableToDos";
import { Routes, Route } from "react-router-dom";

function ListContent() {
    return (
        <div className="card">
            <Input />
            <label>
                <input type='checkbox' />
            Показывать выполненные
            </label>
            <Routes>
                <Route path='/home' element={<TableToDos task='Byu socks' time='on week' />} />
                <Route path='/work' element={<TableToDos task='Make presentation' time='for an hour' />} />
                <Route path='/need' element={<TableToDos task='Make a plan' time='28.12.2021' />} />
            </Routes>
            <Button children='Добавить задачу' />
        </div>
    )
}

export default ListContent;