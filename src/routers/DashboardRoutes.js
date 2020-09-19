import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/NavBar'
import { DCScreen } from '../components/dc/DCScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'

export const DashboardRoutes = () => {
    return (
        <>
          <div>
            <Navbar />
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/heroe/:heroeId" component={HeroScreen} />
                <Route exact path="/dc" component={DCScreen} />
                <Redirect to="/marvel"  />
            </Switch>                 
          </div>

        </>
    )
}
