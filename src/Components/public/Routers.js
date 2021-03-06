import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch as T } from 'react-router-dom'


import Header from './Header'
import main from '../../pages/index'
import Exam1 from '../../pages/Exam_1'
import Exam2 from '../../pages/Exam_2'
import Exam3 from '../../pages/Exam_3'
import Exam4 from '../../pages/Exam_4'
import Exam5 from '../../pages/Exam_5'
import to_do_list from '../../pages/to_do_list'
import Schedule from '../../pages/Schedule'
import Counter from '../../pages/Counter'
import Say from '../../pages/Say'
import EventPractice from '../../pages/EventPractice'
import EventPractice_2 from '../../pages/EventPractice_2'
import ValidationSample from '../../pages/ValidationSample'
import ScrollBox from '../../pages/ScrollBox'
import Iteration from '../../pages/IterationSampe'
import LifeCycle from '../../pages/LifeCycleSample'
import Counter_func from '../../pages/Counter_func'
import info_effect from '../../pages/Info'
import Counter_reducer from '../../pages/Counter_reducer'
import Info_reducer from '../../pages/Info_reducer'
import Average from '../../pages/Average'
import Average_callback from '../../pages/Average_callback'
import Average_ref from '../../pages/Average_ref'
import Info_custom from '../../pages/Info_custom'
import To_Do_Apps from '../../pages/To_Do_Apps'
import Profile from '../../pages/Profile'
import Abount from '../../pages/About'
import Profiles from '../../pages/Profiles'
import News from '../../pages/News'
import ColorBox from '../ColorBox/ColorBox'
import reduxCounter from '../../pages/reduxCounter'

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className='contents container-fluid'>
                    <T>
                        <Route exact path={process.env.REACT_APP_DEVELOPMENT_URL} component={main} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam1"} component={Exam1} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam2"} component={Exam2} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam3"} component={Exam3} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam4"} component={Exam4} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam5"} component={Exam5} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "to_do_list"} component={to_do_list} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Props"} component={Schedule} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Counter"} component={Counter} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Say"} component={Say} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "EventPractice"} component={EventPractice} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "EventPractice_2"} component={EventPractice_2} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "ValidationSample"} component={ValidationSample} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "ScrollBox"} component={ScrollBox} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Iteration"} component={Iteration} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "LifeCycle"} component={LifeCycle} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Counter_2"} component={Counter_func} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Info"} component={info_effect} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Counter_3"} component={Counter_reducer} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Info_2"} component={Info_reducer} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Average"} component={Average} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Average_2"} component={Average_callback} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Average_3"} component={Average_ref} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Info_3"} component={Info_custom} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "To_Do_Apps"} component={To_Do_Apps} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Profile/:username"} component={Profile} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "About"} component={Abount} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Profiles"} component={Profiles} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "News/:category"} component={News} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Context"} component={ColorBox} />
                        <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "redux"} component={reduxCounter} />

                        <Route 
                            render={({ location }) => (
                                <div>
                                    <h2>404 Not Found!</h2>
                                    <p>{location.pathname}</p>
                                </div>
                            )}
                        />
                    </T>
                </div>
            </Router>
        )
    }
}

export default Routers
