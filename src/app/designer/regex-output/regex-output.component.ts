import {Component, OnInit} from '@angular/core';
import {RegexBuilderService} from "../../regex-builder.service";

@Component({
  selector: 'app-regex-output',
  templateUrl: './regex-output.component.html',
  styleUrls: ['./regex-output.component.less']
})
export class RegexOutputComponent implements OnInit {

  constructor(public readonly regexBuilderService: RegexBuilderService) {
  }

  ngOnInit(): void {
  }
}
