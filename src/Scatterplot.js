import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

import Axis from "./Axis";

const Heading = styled.text`
    font-weight: bold;
    font-size: 1.4em;
`;

class Scatterplot extends React.Component {
    state = {};

    static getDerivedStateFromProps(props, state) {
        const { data, filter } = props;

        return {
            ...state,
            data: Object.entries(data)
                .filter(([_, val]) => filter(val))
                .map(([key, value]) => value)
        };
    }

    render() {
        const {
                x,
                y,
                xData,
                yData,
                entry,
                width,
                height,
                xLabel,
                yLabel,
                title
            } = this.props,
            { data } = this.state;

        return null;
    }
}

export default Scatterplot;
