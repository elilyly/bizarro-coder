import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'

export default function Quiz(props) {


    return (
      <div className="ui page grid main fluid">
         <div className="row">
           <div className="column padding-reset">
             <Grid centered>
               <Grid.Row container centered><br/>
                <h1>Quiz</h1>
               </Grid.Row>

                <Grid.Row container centered><br/>
                  <Button basic  color='red' size='massive'>
                    Ruby
                  </Button>
               </Grid.Row>

               <Grid.Row ><br/>
                <Button basic  color='yellow' size='massive'>
                  JavaScript
                </Button>
              </Grid.Row>
            </Grid>
        </div>
      </div>
    </div>
    )
}
