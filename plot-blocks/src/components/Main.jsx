import React, { Component } from 'react'
import styles from './Styles/style.module.css'

export default class Main extends Component {
    render() {
        return (
            <div className={styles.mai}>{this.props.children}</div>
        )
    }
}
