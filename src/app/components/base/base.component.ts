import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  styles = {
    topBar: {
      toolBar: {
        height: '12%',
        backgroundColor: '#5d3979',
        display: 'flex',
      },
      titleToolBar: {
        marginLeft: 'calc(45% - 100px)',
        fontFamily: 'Segoe_UI',
        fontSize: '1.3em',
        letterSpacing: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#d9d9d9',
      },
      iconMenu: {
        fontSize: '40px',
        height: '40px',
        width: '40px',
        color: '#d9d9d9',
      },
      btnMenu: {
        marginLeft: '1%',
        backgroundColor: '#5d3979',
        cursor: 'pointer',
        border: '0',
      }
    },
    sideNav: {
      sideNav: {
        width: '100%',
        height: '88%',
      },
      drawerContent: {
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      drawer: {
        width: '15%'
      }
    }
  }
}