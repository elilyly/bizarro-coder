import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid, List, Header, Table } from 'semantic-ui-react'

// import UserForm from './UserForm'

  var styles = {
  color:'black',
  fontWeight:'light'
  };

const ProfileCard = (props) => (
  <Grid columns={7}>
    <Grid.Column></Grid.Column>

        <Grid.Column width={6}>
            <h3>Report Card</h3>
          <Table celled collapsing>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell><h3>Language</h3></Table.HeaderCell>
             <Table.HeaderCell><h3>Grade</h3></Table.HeaderCell>
           </Table.Row>
         </Table.Header>

         <Table.Body>
           <Table.Row>
             <Table.Cell>
               <Header as='h3' image>
                 <Image src='http://nakulpathak.com/assets/projects/rails_api-a6bf58d9a9826f72fe05ad85079ee88111294b1c4061718ae06f0a7dbca39963.png' shape='rounded' size='mini' />
                 <Header.Content>
                   Ruby
                 </Header.Content>
               </Header>
             </Table.Cell>
             <Table.Cell>
               <h3>6/10</h3>
             </Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>
               <Header as='h3' image>
                 <Image src='https://www.codementor.io/assets/page_img/learn-javascript.png' shape='rounded' size='mini'/>
                 <Header.Content>
                   Javascript
                 </Header.Content>
               </Header>
             </Table.Cell>
             <Table.Cell>
               <h3>10/10</h3>
             </Table.Cell>
           </Table.Row>

         </Table.Body>
        </Table>
            </Grid.Column>
            <Grid.Column></Grid.Column>

      <Grid.Column  width={7} >
        <h4 className="line-1 anim-typewriter3">Oh, hi. Didn't notice you.</h4><br /><br />
        <h4 className="line-1 anim-typewriter2">How are you today {props.currentUser && props.currentUser.username}? hmm</h4>
      </Grid.Column>

      {/* <Grid.Column width={4}>
        <h2 style={styles}>Games Won</h2>
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
        <h2 style={styles}>Games Lost</h2>
        <List relaxed='very'>
          <List.Item>
            <Image avatar src='http://nakulpathak.com/assets/projects/rails_api-a6bf58d9a9826f72fe05ad85079ee88111294b1c4061718ae06f0a7dbca39963.png'/>
            <List.Content>
              <Link to='/quizzes/ruby/questions'><List.Header as='a' style={styles}>Ruby (Retake Quiz)</List.Header></Link>
              <List.Description style={styles}>Completed in 8 minutes.</List.Description>
              <List.Description style={styles}>Answered 2 out of 6 correctly.</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column> */}
    </Grid>
)

export default ProfileCard
{/* <Grid.Column width={3}>
  <Card>
    <Image src='http://24.media.tumblr.com/tumblr_mcrbpe6AYQ1rf9u8oo1_250.gif' />
    <Card.Content>
      <Card.Header>Name: {props.currentUser && props.currentUser.username} </Card.Header>
      <Card.Description>{props.currentUser && props.currentUser.username} is a comedian living in Springfield.</Card.Description>
    </Card.Content>
  </Card>
</Grid.Column> */}
