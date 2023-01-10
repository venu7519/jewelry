import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

 album:any = []

  constructor(private service:AdminService) { 
    service.getAlbum().subscribe(res=>{
      this.album = res;
      console.log(res);
    })
  }

  ngOnInit(): void {
  }





}
