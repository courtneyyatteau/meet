import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import { WarningAlert } from "./Alert";
import EventGenre from "./EventGenre";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsLength: 32,
    savedLocation: "all",
    totalResNumber: "",
    showWelcomeScreen: undefined,
    fullEvents: [],
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        OfflineAlertText: "You are not connected to the internet",
      });
    } else {
      this.setState({
        OfflineAlertText: "",
      });
    }
  }

  componentDidUpdate() {
    if (this.state.offlineText) {
      setTimeout(() => this.setState({ offlineText: null }), 6000);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (
    location = this.state.savedLocation,
    number = this.state.eventsLength
  ) => {
    getEvents().then((events) => {
      let locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      let totalsByLocation = locationEvents.length;
      const isOffline = navigator.onLine ? false : true;

      this.setState({
        events: locationEvents.slice(0, number),
        eventsLength: number,
        savedLocation: location,
        totalResNumber: totalsByLocation,

        offlineText: isOffline ? "You're currently offline." : null,
      });
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(/[-,]+/).shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
        {this.state.offlineText && (
          <WarningAlert text={this.state.offlineText} />
        )}

        {
          <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }}
          />
        }

        {!this.state.showWelcomeScreen && (
          <div>
            <CitySearch
              locations={this.state.locations}
              updateEvents={this.updateEvents}
            />
            <NumberOfEvents
              updateEvents={this.updateEvents}
              events={this.state.events}
              totalResNumber={this.state.totalResNumber}
            />

            <div className="data-vis-wrapper">
              <EventGenre events={this.state.events} />
              <ResponsiveContainer height={400}>
                <ScatterChart
                  width={600}
                  height={400}
                  margin={{
                    top: 20,
                    right: 30,
                    bottom: 20,
                    left: 0,
                  }}
                >
                  <CartesianGrid />
                  <XAxis
                    type="category"
                    dataKey="city"
                    name="city"
                    allowDecimals={false}
                  />
                  <YAxis
                    type="number"
                    dataKey="number"
                    name="number of events"
                    allowDecimals={false}
                  />

                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <EventList events={this.state.events} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
