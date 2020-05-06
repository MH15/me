import React from "react"
import Page from "../templates/page"
import Experience from "../components/experience"
export default () => (
    <Page title="Work">
        <Experience
            title="Blubrry Podcasting"
            dates="Summer 2019"
            role="Software Developer Intern"
        >
            <ul>
            </ul>
        </Experience>

        <Experience
            title="Augmented Reality Research"
            dates="August 2018 - present"
            role="Software Developer Intern"
        >
            <ul>
            </ul>
        </Experience>

        <Experience
            title="Air Force Research Labratory"
            dates="Summer 2019"
            role="Research Intern"
        >
            <ul>
                <li>Provided test verification through validation, simulation, and system identification techniques for the hybrid drive train of an autonomous aircraft prototype at the Air Force Research Laboratory.</li>
                <li>Validated three-phase Delta and Wye AC motors to increase system integrity on a Simulink model of a hybrid drone system. Designed and ran experiments to gather data and calculate constants for System Identification.</li>
            </ul>
        </Experience>

        <Experience
            title="Wright Scholars"
            dates="Summer 2018"
            role="Research Intern"
        >
            <ul>
                <li>Researched fuel-cooled avionics systems and developed MATLAB software to validate thermal controls models.  Mea-sured and controled analog and digital signals with dSPACE data acquisition hardware for an experimental water-based fuel thermal management system (FTMS).</li>
                <li>Constructed a fault detection and mitigation algorithm in Simulink software,  applied through dSPACE hardware,that allowed for automated isolation of fluid flow and pressure faults.</li>
            </ul>
        </Experience>
    </Page>
)