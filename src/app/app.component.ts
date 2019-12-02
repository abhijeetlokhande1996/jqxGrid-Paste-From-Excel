import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'jqxGridTest';
  datafields = [];
  columns = [];
  dataSource = {
    datatype: "local",
  }
  dataAdapter: any;
  localData = []
  @ViewChild("gridReference", { static: false}) myGrid: jqxGridComponent
  ngOnInit() {
    this.localData = [];
    
    for ( let year = 2012; year < 2031; year++) {
      for ( let month = 0; month < 12; month++) {
        const date = new Date(year, month);
        const monthName = date.toLocaleString("en-us", {
          month:"short"
        });
        const dateInString = `${monthName}-${year}`;
        
        this.datafields.push({
          name : dateInString,
          type: "number"
        });
        this.columns.push({
          text : dateInString,
          datafield: dateInString,
          width: 120

        });
        
      }
    }
    for ( let i = 0; i < 11; i++) {
      this.localData.push({
        "Jan-2012" : 0
      })
    }
    this.dataSource["datafields"] = this.datafields;
    this.dataSource["localdata"] = this.localData;
    this.dataAdapter = new jqx.dataAdapter(this.dataSource);
    
  }
  Cellendedit = (event) => {
    console.log("Cellendedit Called");
    const value = event.args.value
    const rowindex = event.args.rowindex;
    const datafield = event.args.datafield;
    this.updateRow(value);
  }
  updateRow = (val: number) => {
    const gridSource = this.myGrid.source();
    
    const data = [];

    for ( let i = 0; i < 11; i++) {
      const obj = {};
      for ( let year = 2012; year < 2031; year++) {
        for ( let month = 0; month < 12; month++) {
          const date = new Date(year, month);
          const monthName = date.toLocaleString("en-us", {
            month:"short"
          });
          const dateInString = `${monthName}-${year}`;
          obj[dateInString] = val;
          data.push(obj);
        }// month
      }// year
      
     
      
    }
    
    this.dataSource["localdata"] = data;
    this.dataAdapter = new jqx.dataAdapter(this.dataSource);

  }
}
