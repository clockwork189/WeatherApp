import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import { bindActionCreators } from 'redux';
// import { fetchWeather } from '../actions/index';


class WeatherList extends Component {
    renderWeather(cityData) {
        const NAME = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        return (
            <tr key={NAME}>
                <td>{NAME}</td>
                <td>
                    <Chart data={temps} color='red' units="K"/>
                </td>
                <td>
                    <Chart data={humidities} color='orange' units="hPa" />
                </td>
                <td>
                    <Chart data={pressures} color='green' units="%"/>
                </td>
            </tr>
        );
    }
    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps({ weather }) {
    return { weather };
}
export default connect(mapStateToProps)(WeatherList);
