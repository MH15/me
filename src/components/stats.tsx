

import React from 'react';

import statsStyles from "./stats.module.scss"
import { useStaticQuery, Link, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    let bday = new Date(1999, 10, 24)
    let today = new Date(Date.now())

    return (
        <div className={statsStyles.stats}>
            <div className={statsStyles.section}>
                <h5>Stats</h5>
                <hr></hr>
                <p><b>Age</b>{diff_years(today, bday)}</p>
                <p><b>Education</b>B. S. Ohio State, Computer Science & Engineering</p>
                <p><b>Education</b>B. S. Ohio State, Computer Science & Engineering</p>
                <p><b>Interests</b>computer graphics, photography, climbing, running, cooking, making</p>
            </div>
            <div className={statsStyles.section}>
                <h5>About This Site</h5>
                <hr></hr>
                <p><b>Created</b>2020</p>
                <p><b>Inspired by</b>
                    <a href="https://overreacted.io">Dan Abramov</a>,&nbsp;
                    <a href="https://paulstamatiou.com/">Paul Stamatiou</a>
                    , and more
                </p>
                <p><b>Read more</b>
                    About this website <Link to="/about-this-website">here</Link>
                </p>
            </div>
        </div>
    )
}

function diff_years(dt2: Date, dt1: Date) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}