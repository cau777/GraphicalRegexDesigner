import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IExpressionSaveData} from "../../models/SaveData";

@Component({
    selector: 'app-saved-display',
    templateUrl: './saved-display.component.html',
    styleUrls: ['./saved-display.component.less']
})
export class SavedDisplayComponent {
    @Input()
    public saved!: IExpressionSaveData[];

    @Output()
    public changeSelected = new EventEmitter<IExpressionSaveData>();

    public columns = ["name", "lastModified", "size"];

    public selected?: IExpressionSaveData;

    public formatDate(element: IExpressionSaveData) {
        return new Date(Date.parse(element.lastModified)).toLocaleString();
    }

    public onClick(data: IExpressionSaveData) {
        const newValue = this.selected === data ? undefined : data;

        this.selected = newValue;
        this.changeSelected.emit(newValue);
    }
}
