import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { DSDiem } from '../../model/dsdiem';

@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {
  diems: DSDiem[] = [];

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.httpService.getDiem().subscribe(
      response => {
        this.diems = response.dsdiems;
      },
      error => {
        console.error('Error fetching data from API', error); 
      }
    );
  }
}
