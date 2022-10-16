import { Directive, ElementRef, Inject, Input, OnInit} from "@angular/core";
import { JQ_TOKEN } from "./Jquery.service";


@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    @Input('modal-trigger')  modalId : string = '';
    //regarder comment instancier un HTML Element
    private el: HTMLElement | undefined;

    constructor(@Inject(JQ_TOKEN) private $ : any, ref: ElementRef){
        this.el = ref.nativeElement;
    }

    ngOnInit(): void {
        this.el?.addEventListener('click',e => {
        this.$(`#${this.modalId}`).modal({})
        })
    }
}