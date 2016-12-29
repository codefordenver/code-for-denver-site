import React from 'react';
import { graphScroll } from 'graph-scroll';
import * as d3 from 'graph-scroll/d3v4+jetpack';

// export default class Report2016 extends React.Component {
//   componentDidMount() {
//     graphScroll()
//       .sections(d3.selectAll('.Report2016 > section'))
//       .on('active', (i) => {
//         console.log(`${i}th section active`);
//       });
//   }
//
//   render() {
//     return (
//       <div className="Report2016">
//         <section>
//           Section 1
//         </section>
//         <div style={{ height: '1000px' }} />
//         <section>
//           Section 2
//         </section>
//       </div>
//     );
//   }
// }


export default class Report2016 extends React.Component {
  componentDidMount() {
    const width = 500,
      height = 450,
      r = 40;
    const svg = d3.select('#graph')
      .append('svg')
      .attrs({ width, height });
      const circle = svg.append('circle')
      .attrs({ cx: 0, cy: 0, r });
      const colors = ['orange', 'purple', 'steelblue', 'black'];
      const gs = graphScroll()
      .container(d3.select('#container'))
      .graph(d3.selectAll('#graph'))
      .sections(d3.selectAll('#sections > div'))
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
    const svg2 = d3.select('#graph2')
      .append('svg')
      .attrs({ width, height });
      const path = svg2.append('path');
      const gs2 = graphScroll()
      .container(d3.select('#container2'))
      .graph(d3.selectAll('#graph2'))
      .sections(d3.selectAll('#sections2 > div'))
      .on('active', (i) => {
        const h = height;
        const w = width;
        const dArray = [
          [[w / 4, h / 4], [w * 3 / 4, h / 4], [w * 3 / 4, h * 3 / 4], [w / 4, h * 3 / 4]],
          [[0, 0], [w * 3 / 4, h / 4], [w * 3 / 4, h * 3 / 4], [w / 4, h * 3 / 4]],
          [[w / 2, h / 2], [w, h / 4], [w, h], [w / 4, h]],
          [[w / 2, h / 2], [0, h / 4], [0, h / 2], [w / 4, 0]],
        ].map(d => `M${d.join(' L ')}`);
        path.transition().duration(1000)
            .attr('d', dArray[i])
            .style('fill', colors[i]);
      });

    d3.select('#source')
      .style({ 'margin-bottom': `${window.innerHeight - 500}px`, padding: '100px' });
  }

  render() {
    return (
      <div>
        <h1><a href="https://github.com/1wheel/graph-scroll">graph-scroll.js</a></h1>
        <h3>Simple scrolling events for d3 graphics.</h3>
        <div id="container">
          <div id="sections">
            <div>
              <h3>Connect text and graphics</h3>
              <span className="mono">graph-scroll</span>
              takes a selection of explanatory text sections and dispatches <span className="mono">active</span> events as different sections are scrolled into to view. These active events are used to update a graph's state.
              <pre>d3.graphScroll(){'\n'}{'  '}.sections(d3.selectAll('#sections &gt; div')){'\n'}{'  '}.on('active', function(i){'{'}{'\n'}{'    '}console.log(i + 'th section active') {'}'}){'\n'}{'      '}</pre>
            </div>
            <div>
              <h3>Highlight active text</h3>
              The top most text section scrolled into view is classed <span className="mono">graph-scroll-active</span>. This makes it easy to highlight the active section with css:
              <pre>#sections &gt; div{'{'}{'\n'}{'  '}opacity: .3{'\n'}{'}'} {'\n'}{'\n'}#sections div.graph-scroll-active{'{'}{'\n'}{'  '}opacity: 1;{'\n'}{'}'}{'\n'}</pre>
            </div>
            <div>
              <h3>Headers and footers</h3>
              To support headers and intro images/text, the explanatory text and graphic are wrapped with a container element:
              <pre>{'  '}&lt;h1&gt;Page Title&lt;/div&gt;{'\n'}{'  '}&lt;div id='container'&gt;{'\n'}{'    '}&lt;div id='sections'&gt;{'\n'}{'      '}&lt;div&gt;Section 0&lt;/div&gt;{'\n'}{'      '}&lt;div&gt;Section 1&lt;/div&gt;{'\n'}{'      '}&lt;div&gt;Section 2&lt;/div&gt;{'\n'}{'    '}&lt;/div&gt;{'\n'}{'\n'}{'    '}&lt;div id='graph'&gt;&lt;/div&gt;{'\n'}{'  '}&lt;/div&gt;{'\n'}{'  '}&lt;h1&gt;Footer&lt;/h1&gt;{'\n'}</pre>
              and passed to <span className="mono">graphScroll</span>
              <pre>{'  '}d3.graphScroll(){'\n'}{'    '}.graph(d3.selectAll('#graph')){'\n'}{'    '}.container(d3.select('#container')){'\n'}<pre>{'    '}</pre></pre></div>
            <div>
              <h3>Sticky graph</h3>
              When the graph scrolls out of view, it is classed with <span className="mono">graph-scroll-fixed</span>. With a little bit of css, the graph element snaps to the top of the page while the text scrolls by.
              <pre>{'  '}#container{'{'}{'\n'}{'    '}position: relative;{'\n'}{'    '}overflow: auto;{'\n'}{'  '}{'}'}{'\n'}{'\n'}{'  '}#sections{'{'}{'\n'}{'    '}width: 200px;{'\n'}{'    '}float: left;{'\n'}{'  '}{'}'}{'\n'}{'\n'}{'  '}#graph{'{'}{'\n'}{'    '}width: 600px;{'\n'}{'    '}float: left;{'\n'}{'    '}margin-left: 40px;{'\n'}{'  '}{'}'}{'\n'}{'\n'}{'  '}#graph.graph-scroll-fixed{'{'}{'\n'}{'    '}position: fixed;{'\n'}{'    '}top: 0px;{'\n'}{'    '}margin-left: 240px;{'\n'}{'  '}{'}'}{'\n'}</pre>
            </div>
          </div>
          <div id="graph" />
        </div>
        <h1>
          Multiple graphs
        </h1>
        <div id="container2">
          <div id="sections2">
            <div>
              <h3>Scroll away</h3>
              As the bottom of the container approaches the top of the page, the graph is classed with <span className="mono">graph-scroll-below</span>. A little more css allows the graph slide out of view gracefully:
              <pre>{'  '}#graph.graph-scroll-below{'{'}{'\n'}{'    '}position: absolute;{'\n'}{'    '}bottom: 0px;{'\n'}{'    '}margin-left: 240px;{'\n'}{'  '}{'}'}{'\n'}</pre>
            </div>
            <div>
              <h3>Examples</h3>
              <p><a href="http://www.bloomberg.com/graphics/2015-auto-sales/">Auto Sales</a></p>
              <p><a href="http://www.bloomberg.com/graphics/2015-measles-outbreaks/">Measles</a></p>
              <p><a href="http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/">Coloring Maps</a></p>
              {/* <p><a href='http://www.bloomberg.com/graphics/2015-fifa-scandal/'>FIFA Scandal</a></p>*/}
              <p><a href="http://www.bloomberg.com/graphics/2015-whats-warming-the-world/">Global Warming</a></p>
              <p><a href="http://www.bloomberg.com/politics/graphics/2015-hillary-womens-movement-timeline/">Hillary Clinton’s Debt to Feminism
                </a></p>
              <p><a href="http://www.bloomberg.com/graphics/year-ahead-2016/">The Year Ahead</a></p>
              <p><a href="http://www.bloomberg.com/graphics/2015-pace-of-social-change/">Pace of Social Change</a></p>
              <p><a href="http://www.bloomberg.com/graphics/2015-red-meat-cancer/">Red Meat</a></p>
            </div>
            <div>
              <h3>More reading</h3>
              <p><a href="http://bost.ocks.org/mike/scroll/">How To Scroll</a></p>
              <p><a href="http://vallandingham.me/scroller.html/">So You Want to Build A Scroller</a></p>
              <p><a href="https://source.opennews.org/en-US/articles/behind-scenes-fewer-helmets-more-deaths/">Making “Fewer Helmets, More Deaths”</a></p>
              <p><a href="http://www.nytimes.com/interactive/2015/10/27/world/greenland-is-melting-away.html">Greenland Is Melting Away</a></p>
              <p><a href="http://www.theguardian.com/us-news/ng-interactive/2015/oct/19/homan-square-chicago-police-detainees">Homan Square</a></p>
            </div>
            <div>
              <h3>Todos</h3>
              <p>- Simple examples
              </p><p>- Self explanatory graphics
              </p><p>- Expose scroll-to functionality
              </p></div>
          </div>
          <div id="graph2" />
        </div>
        <h3 id="source"><a href="https://github.com/1wheel/graph-scroll">contribute/view on github</a></h3>
      </div>
    );
  }
}
