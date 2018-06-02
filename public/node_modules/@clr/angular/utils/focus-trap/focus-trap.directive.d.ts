import { AfterViewInit, ElementRef, Injector, OnDestroy } from "@angular/core";
import { FocusTrapTracker } from "./focus-trap-tracker.service";
export declare class FocusTrapDirective implements AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    private focusTrapsTracker;
    private platformId;
    private _previousActiveElement;
    private document;
    constructor(elementRef: ElementRef, injector: Injector, focusTrapsTracker: FocusTrapTracker, platformId: Object);
    onFocusIn(event: any): void;
    ngAfterViewInit(): void;
    setPreviousFocus(): void;
    ngOnDestroy(): void;
}
