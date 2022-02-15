import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  @HostBinding('attr.size') size = 'md';

  @Input()
  @HostBinding('attr.color') color = 'default';

  @Input()
  @HostBinding('attr.variant') variant = '';

  @Input()
  @HostBinding('attr.disabled') disabled = false;

  @Input()
  @HostBinding('attr.disableshadow') disableShadow = false;

  @Input() startIcon: string | undefined;
  @Input() endIcon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
