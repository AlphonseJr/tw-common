import { ElementRef, OnInit } from '@angular/core';
export declare class ClockComponent implements OnInit {
    private elementRef;
    month: string;
    day: string;
    monthNames: string[];
    dayNames: string[];
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    initLocalClocks(): void;
    ngOnInit(): void;
}
