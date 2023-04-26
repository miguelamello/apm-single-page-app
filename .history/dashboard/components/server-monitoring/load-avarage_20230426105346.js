"use strict";

import Chart from 'chart.js/auto';
import data from './load-avarage-data.js';

class LoadAvarage {

  #config() {
    return {
      type: 'line',
      data: data,
      options: {
        responsive: true
      }
    };
  }

  constructor() {}

  render( container ) {
    const myChart = new Chart(
      document.getElementById( container ),
      this.#config(), 
    );
  }

}

export default new LoadAvarage();