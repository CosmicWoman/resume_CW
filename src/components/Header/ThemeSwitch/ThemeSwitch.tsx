import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../changeTheme/changeTheme'
import Icons from "../../../hooks/Icons/Icons";
import './ThemeSwitch.scss'

//@ts-ignore
const ThemeSwitch = () => {
    const themeDark = useSelector((state:any) => state.theme)
    const dispatch = useDispatch()

    React.useEffect(() => {
        document.documentElement.dataset.themeDark = themeDark
        localStorage.setItem('theme', themeDark)
    }, [ themeDark ])

    const handleChange = () => {
        const next = themeDark === 'dark' ? 'light' : 'dark'
        dispatch(set(next))
    }

    function checkedInput() {
        if(themeDark === 'dark'){
           return false
        } else {
            return true
        }
    }

    return (
        <div className='themeSwitch'>
            <div className="themeSwitch__container">
                <div className="themeSwitch__content">

                    <div className="themeSwitch__block">

                        <label className="themeSwitch__block-switch">
                            <div className='themeSwitch__block-switch_moon'>
                                <Icons name='moon' size='17'/>
                            </div>
                            <div className='themeSwitch__block-switch_sun'>
                                <Icons name='sun' size='18'/>
                            </div>
                            <input type="checkbox"
                                   onClick={handleChange}
                                   checked={checkedInput()}
                            />
                            <div className='themeSwitch__block-switch_circle'></div>
                        </label>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThemeSwitch