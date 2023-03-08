import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

 album:any = []

  constructor(private AdminService:AdminService) { 
    AdminService.getAlbum().subscribe({
      next:(data)=>{
        console.log(data);
        this.album = data;
      },
      error:(e)=> console.log(e),
      complete:()=> console.info('completed')
    })
  }

  ngOnInit(): void {
  }





}
