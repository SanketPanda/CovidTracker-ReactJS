import React from "react";

import { Cards, Charts, Country_picker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
    state = {
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData,country:country});
    }

  render() {
    const {data,country} = this.state;

    return (
      <div className={styles.container}>
        <h3 className={styles.image}>COVID-19 TRACKER</h3>
        <Cards data={data}/>
        <Country_picker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;
