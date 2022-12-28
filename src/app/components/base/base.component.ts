import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  lenguages = [
    { lenguage: 'Spain', flag: './../assets/banderaEspanya.png' },
    { lenguage: 'English', flag: './../assets/banderaEspanya.png' },
    { lenguage: 'Russian', flag: './../assets/banderaEspanya.png' },
  ];

  constructor() {}

  ngOnInit(): void {}

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
        fontSize: '53px',
        height: '53px',
        width: '53px',
        color: '#d9d9d9',
      },
      btnMenu: {
        marginLeft: '1.5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5d3979',
        cursor: 'pointer',
        border: '0',
      },
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
        width: '15%',
        border: '0',
      },
      textItemsBtn: {
        fontSize: '160%',
        color: '#707070',
        fontFamily: 'Segoe_UI',
        letterSpacing: '2px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textItemsBtn2: {
        paddingLeft: '17%',
        fontSize: '160%',
        color: '#707070',
        fontFamily: 'Segoe_UI',
        letterSpacing: '2px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textOptionsBtn: {
        fontSize: '125%',
        color: '#707070',
        fontFamily: 'Segoe_UI',
        letterSpacing: '2px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconExpanded: {
        paddingTop: '0.2em',
        marginLeft: '0.5em',
        fontSize: '30px',
        height: '30px',
        width: '30px',
        color: '#d9d9d9',
      },
      flag: {
        width: '20%',
      },
      flagOption: {
        width: '10%',
        marginRight: '10%',
      },
    },
  };
}
