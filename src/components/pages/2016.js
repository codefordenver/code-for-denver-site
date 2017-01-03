import React from 'react';
import { graphScroll } from 'graph-scroll';
import * as d3 from 'graph-scroll/d3v4+jetpack';

export default class Report2016 extends React.Component {
  componentDidMount() {
    const width = 500;
    const height = 450;
    const r = 40;

    const svg = d3.select('#graph')
      .append('svg')
      .attrs({ width, height });

    const circle = svg.append('circle')
      .attrs({ cx: 0, cy: 0, r });

    const colors = ['orange', 'purple', 'steelblue', 'black'];

    graphScroll()
      .container(d3.select('.container-2016'))
      .graph(d3.selectAll('#graph'))
      .sections(d3.selectAll('.descriptions > section'))
      .on('active', (i) => {
        const pos = [{ cx: width - r, cy: r },
                    { cx: r, cy: r },
                    { cx: width - r, cy: height - r },
                    { cx: width / 2, cy: height / 2 }][i];

        circle.transition().duration(1000)
            .attrs(pos)
          .transition()
            .style('fill', colors[i]);
      });
  }

  render() {
    return (
      <div className="body-content-wrapper Report2016">
        <h1>Code for Denver 2016</h1>
        <div className="body-content container-2016">
          <div className="descriptions">
            <section>
              <h3>This year</h3>
            </section>
            <section>
              <h3>Code for Denver did some cool stuff</h3>
              Check it out!
            </section>
            <section>
              <h3>Woohoo!</h3>
            </section>
            <section>
              <h3>Join us or donate?</h3>
            </section>
          </div>
          <div id="graph" />
        </div>
      </div>
    );
  }
}
