import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import SiteLoading from './components/siteloading/SiteLoading';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';

import AOS from 'aos'
import SocialMedia from './components/socialMedia/SocialMedia';

class App extends React.Component {

  componentDidMount() { 
    AOS.init();
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }



  render() {
    if (this.state.loading) {
      return <SiteLoading />
    } else {
      return (
        <div className="App">
          <Header />
          <div style={{ marginTop: '65px' }}>
            <BrowserRouter>
              <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/social"} exact component={SocialMedia} />
                {/* <Route path={'/'} exact component={HomePage} />
              <Route path={"/admin"} exact component={Admin} />
              <Route path={"/timeline"} exact component={TimeLine} />
              <Route path={"/events"} exact component={EventPage} />
              <Route path={"/instructors"} exact component={InstructorPage} />
              <Route path={"/trainings"} exact component={TrainingPage} />
              <Route path={"/profile"} exact component={SenseiProfile} />
              <Route path={"/gallery"} exact component={GalleyPage} /> */}


              </Switch>
            </BrowserRouter>
          </div>

        </div>
      );
    }

  }
}

export default App;
