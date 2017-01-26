import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HomeCard = () => (
  <Card>
    <CardHeader
      subtitle="GPS Enabled Time Tracking System"
    />
    <CardMedia>
      <img src="/assets/images/poolpic.jpg"/>
    </CardMedia>
  </Card>
);

export default HomeCard;