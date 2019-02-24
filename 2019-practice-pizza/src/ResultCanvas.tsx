import React from 'react';
import * as Problem from "./Problem";

interface CanvasProps {
    width: number,
    height: number
    input: null | Problem.Input,
    output: null | Problem.Output,
    steps: number,
}

interface CanvasState { }

export class ResultCanvas extends React.Component<CanvasProps, CanvasState> {

    constructor(props: CanvasProps, context?: any) {
        super(props, context);
        this.state = {};
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        let ctx: CanvasRenderingContext2D = (this.refs.canvas as any).getContext("2d");
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, this.props.width, this.props.height);

        if (this.props.output) {
            this.props.output.slices.slice(0, this.props.steps).forEach(r => {
                let [r1, c1, r2, c2] = r;
                ctx.fillStyle = "green";
                ctx.fillRect(c1, r1, c2 - c1 + 1, r2 - r1 + 1);
            });
        }



    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={this.props.width} height={this.props.height} />
            </div>
        );
    }
}