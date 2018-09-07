import React from "react";
import styled from "styled-components";
import chroma from "chroma-js";

import DashboardContext from "./DashboardContext";

const Circle = styled.circle`

`;

class Datapoint extends React.Component {
    circleRef = React.createRef();

    render() {
        const { x, y, breed } = this.props;

        return null;
    }
}

export default Datapoint;
