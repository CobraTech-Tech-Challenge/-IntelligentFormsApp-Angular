export class AddForm {
    id: string;
    title: string;
    fields: Field[];

    constructor() {
        this.fields = [];
    }
}

export class Field {
    name: string;
    label: string;
    placeholder: string;
    isMendatory: boolean;
    fieldType: string[];

    constructor(name: string, label: string, placeholder: string, isMendatory: boolean, fieldType: string[]) {
        this.name = name;
        this.label = label;
        this.placeholder = placeholder;
        this.isMendatory = isMendatory;
        this.fieldType = fieldType;
    }
}
