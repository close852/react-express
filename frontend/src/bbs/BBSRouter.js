import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {BBSIntro} from './'
function BBSRouter({history,location ,bbsList}) {
    return (
        <div>
            <Switch>
                <Route exact path="/bbs" component={BBSIntro} />
                <Route path="/bbs/free"><div>asdasd {JSON.stringify(bbsList)}</div></Route>

            </Switch>
        </div>
    )
}

export default BBSRouter
