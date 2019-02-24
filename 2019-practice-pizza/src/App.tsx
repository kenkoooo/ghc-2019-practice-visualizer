import React, { Component } from 'react';
import './App.css';
import { Grid, Typography } from "@material-ui/core";
import * as Problem from "./Problem";
import { ResultCanvas } from "./ResultCanvas";
import * as Utils from "./Utils";
import { isNull } from 'util';

interface AppState {
  input: Problem.Input | null,
  output: Problem.Output | null,
  message: any,
  steps: number
}

class App extends Component<{}, AppState> {
  constructor(props: {}, context?: any) {
    super(props, context);
    this.state = {
      input: null,
      output: null,
      message: "",
      steps: 0,
    };

    this.loadInputFile = this.loadInputFile.bind(this);
    this.loadOutputFile = this.loadOutputFile.bind(this);
  }

  loadInputFile(event: any) {
    if (event.target.files !== null) {
      Utils.readFile(event.target.files[0])
        .then((text) => this.setState({ input: Problem.parseInput(text) }))
        .catch((err) => {
          console.error(err);
          this.setState({ message: err });
        });
    }
  }

  loadOutputFile(event: any) {
    if (event.target.files !== null) {
      Utils.readFile(event.target.files[0])
        .then((text) => this.setState({ output: Problem.parseOutput(text) }))
        .catch((err) => {
          console.error(err);
          this.setState({ message: err });
        });
    }
  }

  render() {
    let canvasHeight = isNull(this.state.input) ? 0 : this.state.input.R;
    let canvasWidth = isNull(this.state.input) ? 0 : this.state.input.C;

    let totalSteps = isNull(this.state.output) ? 0 : this.state.output.slices.length;

    return (
      <div>
        <Typography variant="h2" gutterBottom>
          2019 Practice "Pizza"
          </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Typography variant="h6">Input:</Typography>
            <input accept="application/text" type="file" id="input-file" onChange={this.loadInputFile} />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Output:</Typography>
            <input accept="application/text" type="file" id="output-file" onChange={this.loadOutputFile} />
          </Grid>
          <Grid item xs={3}>
            <Utils.SimpleSlider min={0} max={totalSteps} onChange={(_, v) => this.setState({ steps: v })} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">{this.state.message}</Typography>
          </Grid>

          <Grid item xs={12}>
            <ResultCanvas
              width={canvasWidth}
              height={canvasHeight}
              input={this.state.input}
              output={this.state.output}
              steps={this.state.steps} />
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default App;
