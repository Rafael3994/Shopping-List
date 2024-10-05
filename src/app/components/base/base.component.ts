import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
width: { [klass: string]: any; }|null|undefined;
  constructor(private router: Router) {
    
  }

  navigateTo(to: string) {
    this.router.navigateByUrl(`/${to}`);
  };

  lenguages = [
    { lenguage: 'Spain', flag: './../assets/flags/espanya_flag.png' },
    { lenguage: 'English', flag: './../assets/flags/england_flag.png' },
  ];
  lenghtLenguage = 0

  changeLenguage(value: any) {
    this.lenguages.map((len, index) => {
      if(len.lenguage === value) {
        this.lenghtLenguage = index;
        return
      }
    })
  }

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
        maxWidth: '100%',
        height: '88%',
        overflowX: 'hidden'
      },
      drawerContent: {
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      drawer: {
        minWidth: '13em',
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
        marginLeft: '1rem',
        border: '1px solid grey',
        width: '20%',
      },
      flagOption: {
        border: '1px solid grey',
        width: '10%',
        marginRight: '10%',
      },
    },
  };
}
