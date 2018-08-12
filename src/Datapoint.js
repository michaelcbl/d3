import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";

import DashboardContext from "./DashboardContext";

const Circle = styled.circle`
    fill: ${({ highlighted }) =>
        highlighted
            ? chroma("red")
                  .brighten(2)
                  .hex()
            : "#008ae5"}
    fill-opacity: 0.5;
    stroke: ${({ highlighted }) =>
        highlighted
            ? chroma("red")
                  .brighten(2)
                  .hex()
            : "#008ae5"}
    transition: r .2s ease-in-out;
`;

class Datapoint extends React.Component {
    circleRef = React.createRef();

    render() {
        const { x, y, breed } = this.props;

        return null;
    }
}

export default Datapoint;
