import Sidebar from "./components/sidebar";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

const timelineData = require("../pages/constantData/timelineData.json");

const Dashboard = () => {
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(159,209,245, 1)",
      half: "rgba(159,209,245, 0.5)",
      quarter: "rgba(159,209,245, 0.25)",
      zero: "rgba(159,209,245, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  // ------------Radial Chart----------------
  const chartData = [20, 35, 30, 15];
  const showData = chartData[0] + "%";

  const options1 = {
    responsive: true,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontSize: 18,
        fontColor: "#6D7278",
        fontFamily: "kanit light",
      },
    },
  };

  const data1 = {
    labels: ["Facebook", "Instagram", "YouTube", "Twitter"],
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#9fd1f5", "#973ef0", "#f45d1f", "#efda64"],
      },
    ],
    text: showData,
  };
  // ------------Radial Chart----------------

  return (
    <>
      <Sidebar />
      <main className="main text-center">
        {/* <section className="twitter">

          </section> */}
        <div className="dashboard">
          <section className="">
            <div className="graph-container container-fluid">
              <div className="graph-card card">
                <h5 className="card-title">Page View</h5>
                <div className="App card-text">
                  <canvas id="myChart" ref={canvasEl} height="100" />
                </div>
                <div className="linear-stat-container">
                  <div className="cont-items">
                    <div className="name-graph">Revenue</div>
                    <div className="value-graph">₹100.00</div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="name-graph">Revenue</div>
                    <div className="value-graph">₹100.00</div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="name-graph">Revenue</div>
                    <div className="value-graph">₹100.00</div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="name-graph">Revenue</div>
                    <div className="value-graph">₹100.00</div>
                  </div>
                </div>

                {/* </div> */}
              </div>
              <div className="piechart-card card">
                <h5 className="">Traffic</h5>
                <div className="App card-text d-flex justify-content-center">
                  <Doughnut
                    data={data1}
                    options={options1}
                    height="100"
                    width="100"
                    className="donught-chart"
                  />
                </div>
                <div className="donught-stat-container">
                  <div className="cont-items">
                    <div className="value-graph">20%</div>
                    <div className="name-graph">
                      {" "}
                      <span className="blue-dot"></span>&nbsp; Facebook
                    </div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="value-graph">35%</div>
                    <div className="name-graph">
                      <span className="purple-dot"></span>&nbsp;Instagram
                    </div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="value-graph">30%</div>
                    <div className="name-graph">
                      <span className="red-dot"></span>&nbsp;YouTube
                    </div>
                  </div>
                  <div className="vl"></div>
                  <div className="cont-items">
                    <div className="value-graph">15%</div>
                    <div className="name-graph">
                      <span className="yellow-dot"></span>&nbsp;Twitter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="card-container mt-2">
              <div className="card1 card">
                <div className="card-body">
                  <h5 className="card-title">Revenue Status</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    
                  </p>
                </div>
              </div>
              <div className="card2 card">
                <div className="card-body">
                  <h5 className="card-title">Page View</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card3 card">
                <div className="card-body">
                  <h5 className="card-title">Bounce Rate </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card4 card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- */}
          <section className="">
            <div className="graph-container container-fluid ">
              <div className="bottom-left-card card">
                <h5 className="card-title">Timeline</h5>
                <div className="App card-text">
                  <div className="timeline-container">
                    {timelineData &&
                      timelineData.map((data) => {
                        return (
                          <div className="timeline-item">
                            <div className="timeline-item-content">
                              <span
                                className="tag"
                                style={{ background: data?.color }}
                              >
                                {data?.tag}
                              </span>
                              <time>{data?.date}</time>
                              <p>{data?.text}</p>
                              <span className="circle" />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="bottom-right-card card">
                <h5 className="">Status</h5>
                <table className="table">
                  <thead className="header-table">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Delivered</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>Cancel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* -------------------- */}
        </div>
      </main>
    </>
  );
};
export default Dashboard;
