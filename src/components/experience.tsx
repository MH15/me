/**
 * Work experience unit
 */

import React from "react"

type ExperienceProps = {
    title: string,
    dates: string,
    role: string
    post?: string,
    children: any

}

export default (props: ExperienceProps) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <h3>
                <span style={{
                    textTransform: "uppercase"
                }}>{props.dates}</span>
                &nbsp;• {props.role}</h3>
            <div>{props.children}</div>
        </div >
    )
}


