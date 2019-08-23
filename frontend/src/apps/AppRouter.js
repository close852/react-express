import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {AppIntro,AppIngList, AppTodoList,AppEndList,AppTempSaveList} from './'
function AppRouter({history,location ,todoList, ingList, endList, tempSaveList}) {
    return (
        <div>
            <Switch>
                <Route exact path="/app" component={AppIntro} />
                <Route path="/app/todolist"><AppTodoList todoList={todoList}/></Route>
                <Route path="/app/inglist"><AppIngList ingList={ingList}/></Route>
                <Route path="/app/endlist"><AppEndList endList={endList}/></Route>
                <Route path="/app/tempsave"><AppTempSaveList tempSaveList={tempSaveList}/></Route>
            </Switch>
        </div>
    )
}
export default AppRouter
