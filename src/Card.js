import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import OpacityIcon from '@material-ui/icons/Opacity';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

export default class MediaCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: []
        };
    }
    getWeatherDetails = (place) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        const apiKey = '&appid=e66ea1932c060f0a5df76c7144563ccc';
        const url = `${apiUrl}${place}${apiKey}`;
        fetch(proxyurl + url)
        .then(response => response.json())
        .then(contents => {
            this.setState({
            weatherData: contents.list.slice(0,5)
        })
        }).catch(() => console.log("Can’t access " + apiUrl + " response. Blocked by browser?"));
    }
    componentDidMount() {
        this.getWeatherDetails(this.props.city);
    };

    componentDidUpdate() {
        this.getWeatherDetails(this.props.city);
    }
    render() {
        const { weatherData } = this.state;
        if(weatherData.length > 0) {
            return weatherData.map((data) => {
                const date = moment(data.dt_txt).format("DD-MM-YYYY");
                const imgClass = `owf owf-${data.weather[0].id} owf-5x`;
                return (
                <div className="card-container">
                    <Card className={parseInt(data.main.temp-273.15) > 16 ? "card-high-temp" : "card-low-temp"}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {this.props.city}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {date}
                            </Typography>
                            <i className={imgClass}></i>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                {data.weather[0].description}
                            </Typography>
                            <hr/>
                            <div className="temp">
                                <Typography variant="h4" component="h6">
                                    {`${parseInt(data.main.temp-273.15)}`}<sup>o</sup>
                                </Typography>
                                <div className="sub">
                                    <Typography variant="body2" component="p">
                                        <OpacityIcon/>{`${data.main.humidity} %`}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {`${data.wind.speed} km/h`}
                                    </Typography>
                                </div>
                            </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>)
                })
        } else {
            return <></>
        }
    }
}
