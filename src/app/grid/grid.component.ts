import { Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GridService} from '../shared/grid.service';
import {DialogComponent} from '../dialog/dialog';
import {UserData} from '../shared/userData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit  {

  displayedColumns = [];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();
  users: UserData[];
  pageIndex = 1;
  pageSize = 10;
  length: number;
   pageSizeOptions = [5, 10, 25, 50, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(private _gridService: GridService , public dialog: MatDialog) { }

   setPagination(length) {
    this.length = length;
  }

  ngOnInit() {
    this.loadData();

  }

openDialog(msg: string): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '350px',
    data: { message: msg}
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}

  loadData() {
    if (this.displayedColumns ===  undefined || this.displayedColumns.length === 0) {
      this._gridService.getColumn().subscribe((results: string[]) => {
        this.displayedColumns = results;
      });
    }
    this._gridService.getGridData().subscribe((results: UserData[]) => {
        this.users = results;
        this.setPagination(results.length);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
}

  postRowId (id: number , name: string) {
    this._gridService.postId(id.toString() , name).subscribe((result: any) => {
      this.openDialog( name );
      console.log(result);
    });
  }
}




