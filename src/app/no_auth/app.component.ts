import { Component } from '@angular/core';
     
class Document{
    name: string;
    date: any;
    id: number;
    notation:string;
     
    constructor(name: string, date: any,id:number,notation:string) {
  
        this.name = name;
        this.date = date;
        this.id = id;
        this.notation = notation;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Список документов </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Имя файла" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="date" class="form-control" [(ngModel)]="date" placeholder="Дата" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="id" placeholder="Номер" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="notation" placeholder="Примечание" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addDocument(name, date, id, notation)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Документ</th>
                    <th>Дата</th>
                    <th>Номер</th>
                    <th>Примечание</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.notation}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Document[] = 
    [
        { name: "Отчёт за май",date: "01.06.2019", id: 15, notation:"Подробный отчёт по финансовой работе" },
        { name: "Отчёт за июнь",date: "01.07.2019", id: 16, notation:"Подробный отчёт по финансовой работе" },
        { name: "Отчёт за июль",date: "01.08.2019", id: 17, notation:"Подробный отчёт по финансовой работе" }
    ];
    addDocument(name: string, date: any , id: number, notation:string): void {
         
        if(name==null || name.trim()=="" || id==null || notation==null)
            return;
        this.items.push(new Document(name, date, id ,notation));
    }
}