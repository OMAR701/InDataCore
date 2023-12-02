import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,

} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public chart: any;


  ngOnInit() {

    this.createChart();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});

    var chartPie = document.getElementById('chart-pie');

    parseOptions(Chart, chartOptions());

    var pieChart = new Chart(chartPie, {
      type: 'pie',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  createChart() {
    const productNames = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    const salesData = [300, 240, 100, 432, 253]; 

    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: productNames,
        datasets: [{
          label: 'Most Sold Products',
          data: salesData,
          backgroundColor: [
            'blue',
            'green',
            'orange',
            'purple',
            'red',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }



}
