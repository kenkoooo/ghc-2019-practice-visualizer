import React from 'react';
import { Typography } from '@material-ui/core';

export async function readFile(file: any): Promise<string> {
    let fileReader = new FileReader();
    return new Promise<string>((resolve, reject) => {
        fileReader.onerror = () => {
            fileReader.abort();
            reject();
        };
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                resolve(fileReader.result);
            } else {
                reject();
            }
        };
        fileReader.readAsText(file);
    });
}

interface SliderState {
    value: number,
}

interface SliderProps {
    min: number,
    max: number,
    onChange?: (e: any, v: number) => void,
}

export class SimpleSlider extends React.Component<SliderProps, SliderState> {
    constructor(props: SliderProps, context?: any) {
        super(props, context);
        this.state = {
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        let v = e.target.value;
        if (this.props.onChange) {
            this.props.onChange(e, v);
        }
        this.setState({ value: v })
    }

    render() {
        return (
            <div>
                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    step={1}
                    onChange={this.handleChange} />
                <input
                    type="number"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    step={1}
                    onChange={this.handleChange} />
            </div>
        );
    }
}