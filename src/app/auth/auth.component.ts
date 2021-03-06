import { Component } from '@angular/core';
     
class Document{
    name: string;
    date: any;
    id: number;
    notation:string;
    checked:boolean;
     
    constructor(name: string, date: any,id:number,notation:string) {
  
        this.name = name;
        this.date = date;
        this.id = id;
        this.notation = notation;
        this.checked = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Режим изменения документов </h1>
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
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                 <button class="btn btn-default btn-sm" (click)="deleteDocument()">Удалить</button> 
                </div>
            </div>
            <div class="form-group">
            <div class="col-md-offset-2 col-md-8">
            <button class="btn btn-default btn-sm">Изменить</button>
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
                    <th>Выделение</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.notation}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.checked" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AuthComponent { 
    items: Document[] = 
    [
        { name: "Отчёт за май",date: "01.06.2019", id: 15, notation:"Подробный отчёт по финансовой работе",checked:false },
        { name: "Отчёт за июнь",date: "01.07.2019", id: 16, notation:"Подробный отчёт по финансовой работе",checked:false },
        { name: "Отчёт за июль",date: "01.08.2019", id: 17, notation:"Подробный отчёт по финансовой работе",checked:false }
    ];
    addDocument(name: string, date: any , id: number, notation:string): void {
         
        if(name==null || name.trim()=="" || id==null || notation==null)
            return;
        this.items.push(new Document(name, date, id ,notation));
    }
    deleteDocument(){
        var i = 0;
        while(i <= (this.items.length - 1)){
            if(this.items[i].checked==true){
                //document.getElementsByTagName('tbody').removeChild()
                delete this.items[i];

            }
            i++;
        }
    }
}