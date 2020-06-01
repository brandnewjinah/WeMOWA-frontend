import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class CountryDD extends Component {
  state = {
    countries: [
      {
        name: "Australia",
        region: "Oceania",
        latlng: [-10.5, 105.66666666],
        currencies: [{ code: "AUD", name: "Australian dollar", symbol: "$" }],
      },
      {
        name: "Estonia",
        region: "Europe",
        latlng: [59.0, 26.0],
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
      },
      {
        name: "France",
        region: "Europe",
        latlng: [46.0, 2.0],
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
      },
      {
        name: "Italy",
        region: "Europe",
        latlng: [42.83333333, 12.83333333],
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
      },
      {
        name: "Korea (Republic of)",
        region: "Asia",
        latlng: [37.0, 127.5],
        currencies: [{ code: "KRW", name: "South Korean won", symbol: "₩" }],
      },
      {
        name: "Monaco",
        region: "Europe",
        latlng: [43.73333333, 7.4],
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
      },
      {
        name: "Taiwan",
        region: "Asia",
        latlng: [23.5, 121.0],
        currencies: [{ code: "TWD", name: "New Taiwan dollar", symbol: "$" }],
      },
      {
        name: "United States of America",
        region: "Americas",
        latlng: [38.0, -97.0],
        currencies: [
          { code: "USD", name: "United States dollar", symbol: "$" },
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <DropdownCheck list={this.state.countries} />
      </div>
    );
  }
}

export default CountryDD;
