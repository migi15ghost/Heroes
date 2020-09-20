import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/NavBar'
import { DCScreen } from '../components/dc/DCScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <div >
            <Navbar />
            <div className="container mt-5">
              <Switch>
                  <Route exact path="/marvel" component={MarvelScreen} />
                  <Route exact path="/hero/:heroeId" component={HeroScreen} />
                  <Route exact path="/dc" component={DCScreen} />
                  <Route exact path="/search" component={SearchScreen} />
                  <Redirect to="/marvel"  />
              </Switch>                 
            </div>
          </div>

        </>
    )
}
