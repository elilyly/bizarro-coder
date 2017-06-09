import React from 'react'
import { Card, Image, Grid, List } from 'semantic-ui-react'
var styles = {
color:'black',
fontWeight:'light'
};
const ProfileCard = () => (


  <Grid container columns={3}>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
      <h1 style={styles}>Play, if you dare...</h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
        <Card>
          <Image src='http://24.media.tumblr.com/tumblr_mcrbpe6AYQ1rf9u8oo1_250.gif' />
          <Card.Content>
            <Card.Header>Marge</Card.Header>
            <Card.Description>Marge is a comedian living in Springfield.</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column width={4}>
        <h1 style={styles}>Games Won</h1>
        <List relaxed='very'>
          <List.Item>
            <Image avatar src='https://www.codementor.io/assets/page_img/learn-javascript.png'/>
            <List.Content>
              <List.Header as='a' style={styles}>Javascript</List.Header>
              <List.Description style={styles}>Completed in 4 minutes.</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>

      <Grid.Column width={4}>
      <h1 style={styles}>Games Lost</h1>
      <List relaxed='very'>
        <List.Item>
          <Image avatar src='http://nakulpathak.com/assets/projects/rails_api-a6bf58d9a9826f72fe05ad85079ee88111294b1c4061718ae06f0a7dbca39963.png'/>
          <List.Content>
            <List.Header as='a' style={styles}>Ruby</List.Header>
            <List.Description style={styles}>Completed in 8 minutes.</List.Description>
            <List.Description style={styles}>Answered 2 out of 6 correctly.</List.Description>
          </List.Content>
        </List.Item>
      </List>
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default ProfileCard
