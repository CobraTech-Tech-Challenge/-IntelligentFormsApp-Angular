export class AddForm {
    id: string;
    title: string;
    fields: Field[];

    constructor() {
        this.fields = [];
    }
}

export class Field {
    label: string;
    placeholder: string;
    isMandatory: boolean;
    fieldType: string;

    constructor(label: string, placeholder: string, isMandatory: boolean, fieldType: string) {
        this.label = label;
        this.placeholder = placeholder;
        this.isMandatory = isMandatory;
        this.fieldType = fieldType;
    }
}
