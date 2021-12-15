import { Component, OnInit } from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";

@Component({
  selector: 'app-regex-options',
  templateUrl: './regex-options.component.html',
  styleUrls: ['./regex-options.component.less']
})
export class RegexOptionsComponent implements OnInit {

  constructor(public readonly regexBuilderService: RegexBuilderService) { }

  ngOnInit(): void {
  }

}
