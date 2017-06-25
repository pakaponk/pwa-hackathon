import React, { Component } from 'react'
import { textfield } from 'material-components-web'

export default class InputField extends Component{
    constructor(props){
        super(props)

        this.state = {
            classes: new Set(),
            labelClasses: new Set()
        }

        const { MDCTextfieldFoundation } = textfield
        this.foundation = new MDCTextfieldFoundation({
            addClass: className => {
                this.setState(prevState => ({
                    classes: prevState.classes.add(className)
                }))
            },
            removeClass: className => {
                this.setState(prevState => {
                    prevState.classes.delete(className)
                    return {
                        classes: prevState.classes
                    }
                })
            },
            addClassToLabel: className => {
                this.setState(prevState => ({
                    labelClasses: prevState.labelClasses.add(className)
                }))
            },
            removeClassFromLabel: className => {
                this.setState(prevState => {
                    prevState.labelClasses.delete(className)
                    return {
                        labelClasses: prevState.labelClasses
                    }
                })
            },
            addClassToHelptext: className => {

            },
            removeClassFromHelptext: className => {

            },
            helptextHasClass: className => {
                return false
            },
            setHelptextAttr: (name, value) => {

            },
            removeHelptextAttr: name => {

            },
            registerInputFocusHandler: handler => {
                if (this.refs.input){
                    this.refs.input.addEventListener('focus', handler)
                }
            },
            deregisterInputFocusHandler: handler => {
                if (this.refs.input){
                    this.refs.input.removeEventListener('focus', handler)
                }
            },
            registerInputBlurHandler: handler => {
                if (this.refs.input){
                    this.refs.input.addEventListener('blur', handler)
                }
            },
            deregisterInputBlurHandler: handler => {
                if (this.refs.input){
                    this.refs.input.removeEventListener('blur', handler)
                }
            },
            registerInputInputHandler: handler => {
                if (this.refs.input){
                    this.refs.input.addEventListener('input', handler)
                }
            },
            deregisterInputInputHandler: handler => {
                if (this.refs.input){
                    this.refs.input.removeEventListener('input', handler)
                }
            },
            registerInputKeydownHandler: handler => {
                if (this.refs.input){
                    this.refs.input.addEventListener('keydown', handler)
                }
            },
            deregisterInputKeydownHandler: handler => {
                if (this.refs.input){
                    this.refs.input.removeEventListener('keydown', handler)
                }
            },
            getNativeInput: () => {
                return {
                    value: this.refs.input.value,
                    disabled: this.refs.input.disabled,
                    badInput: false,
                    checkValidity: () => {
                        return this.refs.input.checkValidity()
                    }
                }
            }
        })
    }

    componentDidMount(){
        this.foundation.init()
    }

    componentWillUnmount(){
        this.foundation.destroy()
    }

    render(){
        const rootClasses = [...this.state.classes].join(" ")
        const labelClasses = [...this.state.labelClasses].join(" ")

        return (
            <div ref="root" className={`mdc-textfield ${rootClasses}`}>
                <input ref="input" type={this.props.type || "text"} name={this.props.name} onChange={this.props.handleChange} className="mdc-textfield__input" required={this.props.required || false}/>
                <label ref="label" className={`mdc-textfield__label ${labelClasses}`}>{this.props.label}</label>
            </div>
        )
    }
}